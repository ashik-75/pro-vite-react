import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "https://rickandmortyapi.com/api",
	// credentials: "include",
});

const api = createApi({
	reducerPath: "rtk",
	baseQuery: baseQuery,
	tagTypes: ["Character"],
	endpoints: () => ({}),
});

export default api;
