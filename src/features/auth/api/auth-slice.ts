import { createSlice } from "@reduxjs/toolkit";
// import { ResponseType } from "../types/auth.type";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const initialState: { user: string; accessToken: string; loaded: boolean } = {
	user: "",
	accessToken: "",
	loaded: false,
};

const authSlice = createSlice({
	name: "auth-slice",
	initialState,
	reducers: {
		tokenSet: (state, action) => {
			console.log("PAYLOAD: ", action.payload.accessToken);
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.loaded = true;
		},
		logout: (state) => {
			state.user = "";
			state.accessToken = "";
			state.loaded = true;
		},
	},
});

export const { tokenSet, logout } = authSlice.actions;
export default authSlice.reducer;

export const useProfile = () => {
	return useSelector((state: RootState) => state.auth);
};

export const selectAuth = (state: RootState) => state.auth;
