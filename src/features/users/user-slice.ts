import api from "@/app/api";

const userSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<{ username: string }[], void>({
			query: () => "/users",
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetUsersQuery } = userSlice;
