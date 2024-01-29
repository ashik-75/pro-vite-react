import { useRefreshQuery } from "@/features/auth/api/auth-api";
import { selectAuth } from "@/features/auth/api/auth-slice";
import { usePersist } from "@/hooks/use-persist";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PersistLogin: React.FC = () => {
	const [persist] = usePersist();
	const auth = useSelector(selectAuth);
	const shouldStart = persist && !auth.accessToken;
	const { isLoading } = useRefreshQuery(undefined, {
		skip: !shouldStart,
	});

	if (isLoading) {
		return <div>Loading ...</div>;
	}
	return <Outlet />;
};

export default PersistLogin;
