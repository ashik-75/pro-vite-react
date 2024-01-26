import { useRefreshQuery } from "@/features/auth/api/auth-api";
import { selectToken } from "@/features/auth/api/auth-slice";
import { usePersist } from "@/hooks/use-persist";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PersistLogin: React.FC = () => {
	const [persist] = usePersist();
	const token = useSelector(selectToken);
	console.log({ token });
	const { isLoading, isError } = useRefreshQuery(undefined, {
		skip: !(persist && !token),
	});

	if (isLoading) {
		return <div>Loading ...</div>;
	} else if (isError) {
		toast.error("Failed to login");
		return <Navigate to={"/login"} />;
	}
	return <Outlet />;
};

export default PersistLogin;
