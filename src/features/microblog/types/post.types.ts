import * as z from "zod";

export const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.string(),
	reaction: z.object({
		like: z.number(),
		love: z.number(),
		angry: z.number(),
		wow: z.number(),
	}),
});

export type Post = z.infer<typeof postSchema>;
