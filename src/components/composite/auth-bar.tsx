import { selectAuth } from "@/features/auth/api/auth-slice";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const AuthBar = () => {
	const auth = useSelector(selectAuth);
	const navigate = useNavigate();

	if (!auth.loaded) {
		return null;
	}

	return (
		<>
			{auth.accessToken ? (
				<div>
					<Button
						onClick={() => navigate("/login")}
						size={"sm"}
						variant={"secondary"}
					>
						Profile
					</Button>
					<Button
						onClick={() => navigate("/add-note")}
						size={"sm"}
						variant={"secondary"}
					>
						Add Note
					</Button>
					<Button
						onClick={() => navigate("/users")}
						size={"sm"}
						variant={"secondary"}
					>
						users
					</Button>
				</div>
			) : (
				<div className="flex gap-5">
					<Button
						onClick={() => navigate("/login")}
						size={"sm"}
						variant={"secondary"}
					>
						Login
					</Button>
					<Button
						onClick={() => navigate("/register")}
						size={"sm"}
						variant={"secondary"}
					>
						Register
					</Button>
				</div>
			)}
		</>
	);
};

export default AuthBar;
