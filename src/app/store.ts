import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "../features/counter";
import noteSlice from "@/features/microblog/api/post-slice";
import categorySlice from "@/features/microblog/api/category-slice";

const store = configureStore({
	reducer: {
		counter: counterSlide,
		[noteSlice.reducerPath]: noteSlice.reducer,
		[categorySlice.reducerPath]: categorySlice.reducer,
	},
	middleware: (gdm) =>
		gdm().concat(noteSlice.middleware, categorySlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
