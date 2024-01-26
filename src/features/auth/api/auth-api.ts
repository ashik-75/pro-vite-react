import api from "@/app/api";
import { LoginSchemaType } from "../components/login-form";
import { RegistrationSchemaType } from "../components/registration-form";
import { ResponseType } from "../types/auth.type";
import { tokenSet } from "./auth-slice";

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ResponseType, LoginSchemaType>({
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
		register: builder.mutation<ResponseType, RegistrationSchemaType>({
			query: (body) => {
				return {
					url: "/register",
					method: "POST",
					body,
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
					dispatch(tokenSet({ accessToken: data.accessToken }));
					console.log("REFresh token data", data);
				} catch (error) {
					console.log("ERROR REFRESH", error);
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
