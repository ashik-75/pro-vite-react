import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "../features/counter";

const store = configureStore({
	reducer: {
		counter: counterSlide,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
