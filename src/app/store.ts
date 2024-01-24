import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "../features/counter";
import api from "./api";
import authSlice from "@/features/auth/api/auth-slice";

const store = configureStore({
	reducer: {
		counter: counterSlide,
		auth: authSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (gdm) => gdm().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
