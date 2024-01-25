import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { logout, tokenSet } from "@/features/auth/api/auth-slice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3500",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.accessToken;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	console.log("AccessToken Result: ", result);

	if (result?.error?.originalStatus === 403) {
		const refreshResult = await baseQuery("/refresh", api, extraOptions);
		console.log("New AccessToken", refreshResult);
		if (refreshResult?.data) {
			const user = (api.getState() as RootState).auth.user;
			// store the new token
			api.dispatch(tokenSet({ ...refreshResult.data, user }));
			// retry the original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			// api.dispatch(logout());
		}
	}

	return result;
};

const api = createApi({
	reducerPath: "rtk",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Notes", "Category"],
	endpoints: () => ({}),
});

export default api;
