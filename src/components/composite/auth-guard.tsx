import { useProfile } from "@/features/auth/api/auth-slice";
import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
	const profile = useProfile();
	const location = useLocation();

	if (!profile.accessToken) {
		return <Navigate to={"/login"} state={{ path: location.pathname }} />;
	}
	return <Outlet />;
};

export default RequireAuth;
