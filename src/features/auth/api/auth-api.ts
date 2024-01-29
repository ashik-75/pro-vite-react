import api from "@/app/api";
import { LoginSchemaType } from "../components/login-form";
import { ResponseType } from "../types/auth.type";
import { tokenSet } from "./auth-slice";

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<{ accessToken: string }, LoginSchemaType>({
			query: (body) => {
				return {
					body,
					method: "POST",
					url: "/auth",
					headers: {
						"Content-Type": "application/json",
					},
				};
			},
			onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(tokenSet({ accessToken: data.accessToken, loaded: true }));
				} catch (error) {
					dispatch(tokenSet({ accessToken: "", loaded: true }));
				}
			},
		}),
		logout: builder.mutation<void, void>({
			query: () => {
				console.log("LOGOUT");
				return {
					method: "GET",
					url: "/logout",
				};
			},
		}),
		register: builder.mutation<ResponseType, { user: string; pwd: string }>({
			query: (body) => {
				console.log({ body });
				return {
					url: "/register",
					method: "POST",
					body,
					headers: {
						"Content-Type": "application/json",
					},
				};
			},
		}),
		refresh: builder.query<ResponseType, void>({
			query: () => ({
				url: `/refresh`,
				method: "GET",
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(tokenSet({ accessToken: data.accessToken, loaded: true }));
					console.log("REFresh token data", data);
				} catch (error) {
					console.log("ERROR REFRESH", error);
					dispatch(tokenSet({ accessToken: "", loaded: true }));
				}
			},
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useRefreshQuery,
	useLogoutMutation,
} = authApi;
