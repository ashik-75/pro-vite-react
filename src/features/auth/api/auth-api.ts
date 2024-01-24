import api from "@/app/api";
import { LoginSchemaType } from "../components/login-form";
import { RegistrationSchemaType } from "../components/registration-form";
import { ResponseType } from "../types/auth.type";

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
		register: builder.mutation<ResponseType, RegistrationSchemaType>({
			query: (body) => {
				return {
					url: "/register",
					method: "POST",
					body,
				};
			},
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
