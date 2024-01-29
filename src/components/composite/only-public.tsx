import { selectAuth } from "@/features/auth/api/auth-slice";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OnlyPublic: React.FC = () => {
	const auth = useSelector(selectAuth);

	if (auth.accessToken) {
		return <Navigate to={"/profile"} />;
	}
	return <Outlet />;
};

export default OnlyPublic;
