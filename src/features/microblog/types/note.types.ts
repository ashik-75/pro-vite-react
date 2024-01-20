export interface NotesResponse {
	count: number;
	page: number;
	totalPage: number;
	limit: number;
	notes: Note[];
}

export interface Note {
	id: number;
	title: string;
	message: string;
	createdAt: string;
	updatedAt: string;
	categoryId: number | null;
	category: Category | null;
}

export interface CategoryResponse {
	count: number;
	categories: Category[];
}

export interface Category {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
}
