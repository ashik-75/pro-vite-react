import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "../api/auth-slice";
import { useLogoutMutation } from "../api/auth-api";
import toast from "react-hot-toast";

const Profile = () => {
	const dispatch = useDispatch();
	const [logoutMutattion] = useLogoutMutation();
	return (
		<div>
			<h1>Profile</h1>
			<Button
				onClick={async () => {
					logoutMutattion()
						.unwrap()
						.then(() => toast.success("successfully logged out"))
						.catch(() => toast.error("Went wrong!"));
					dispatch(logout());
				}}
			>
				Logout
			</Button>
		</div>
	);
};

export default Profile;
