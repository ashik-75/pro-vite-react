import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, CategoryResponse } from "../types/note.types";
import api from "@/app/api";

const categorySlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllCategory: builder.query<CategoryResponse, void>({
			query: () => "/category",
			providesTags: (result, error) => {
				if (error || !result) {
					return [{ type: "Category", id: "LIST" }];
				}

				return [
					...result.categories.map(
						({ id }) => ({ type: "Category", id } as const)
					),
					{ type: "Category", id: "LIST" },
				];
			},
		}),
		addCategory: builder.mutation<Category, Partial<Category>>({
			query: (body) => ({
				url: "/category",
				method: "POST",
				body: body,
			}),
			invalidatesTags: [{ type: "Category", id: "LIST" }],
		}),
		deleteCategory: builder.mutation<{ message: string }, number>({
			query: (noteId) => ({
				method: "DELETE",
				url: `/category/${noteId}`,
			}),
			invalidatesTags: (result, error, id) => [{ type: "Category", id }],
		}),
		updateCategory: builder.mutation<Category, Partial<Category>>({
			query: (data) => {
				const { id, ...body } = data;
				return {
					url: `/category/${id}`,
					body,
					method: "PUT",
				};
			},
			invalidatesTags: (result, error, { id }) => [{ type: "Category", id }],
		}),
	}),
});

export const {
	useGetAllCategoryQuery,
	useAddCategoryMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation,
} = categorySlice;

export default categorySlice;
