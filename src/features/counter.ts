import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type CounterState = {
	count: number;
};

const initialState: CounterState = {
	count: 5,
};
const counterSlide = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		incrementBy: (state, action) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, reset, incrementBy } =
	counterSlide.actions;

export const selectCount = (state: RootState) => state.counter.count;
export default counterSlide.reducer;
