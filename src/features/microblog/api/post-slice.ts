import { Note, NotesResponse } from "../types/note.types";
import api from "@/app/api";

const noteSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getNotes: builder.query<NotesResponse, string>({
			query: (query) => `/note?${query}`,
			providesTags: (result, error) => {
				if (error || !result) {
					return [{ type: "Notes", id: "LIST" }];
				}

				return [
					...result.notes.map(({ id }) => ({ type: "Notes", id } as const)),
					{ type: "Notes", id: "LIST" },
				];
			},
		}),
		getNote: builder.query<Note, number>({
			query: (noteId) => `/note/${noteId}`,
			providesTags: (result) => [{ type: "Notes", id: result?.id }],
		}),
		addNote: builder.mutation<Note, Partial<Note>>({
			query: (body) => ({
				url: "/note",
				method: "POST",
				body: body,
			}),
			invalidatesTags: [{ type: "Notes", id: "LIST" }],
		}),
		deleteNote: builder.mutation<{ message: string }, number>({
			query: (noteId) => ({
				method: "DELETE",
				url: `/note/${noteId}`,
			}),
			invalidatesTags: (result, error, id) => [{ type: "Notes", id }],
		}),
		updateNote: builder.mutation<Note, Partial<Note>>({
			query: (data) => {
				const { id, ...body } = data;
				return {
					url: `/note/${id}`,
					body,
					method: "PUT",
				};
			},
			invalidatesTags: (result, error, { id }) => [{ type: "Notes", id }],
		}),
	}),
});

export const {
	useGetNotesQuery,
	useGetNoteQuery,
	useAddNoteMutation,
	useUpdateNoteMutation,
	useDeleteNoteMutation,
} = noteSlice;

export default noteSlice;
