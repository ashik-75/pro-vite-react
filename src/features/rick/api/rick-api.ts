import api from "@/app/api";
import { Character, RickyResponse } from "../types";

const rickyApi = api.injectEndpoints({
	endpoints: (builder) => ({
		characters: builder.query<RickyResponse, void>({
			query: () => {
				return {
					url: `/character`,
					headers: {
						"Access-Control-Allow-Origin": "*",
					},
				};
			},
			// keepUnusedDataFor: 30,
		}),
		character: builder.query<Character, string>({
			query: (id) => `/character/${id}`,
		}),
	}),
});

export const { useCharactersQuery, useCharacterQuery } = rickyApi;
