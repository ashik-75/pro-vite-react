import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "@/features/auth/api/auth-slice";

const Navbar = () => {
	const navigate = useNavigate();
	const accessToken = useSelector(selectToken);
	return (
		<div className="flex justify-between p-5">
			<Link to={"/"}>
				<img src="/ai-1.jpg" className="h-10 w-10 rounded-xl" />
			</Link>

			<div className="space-x-5 flex gap-5">
				<>
					{accessToken ? (
						<Button
							onClick={() => navigate("/login")}
							size={"sm"}
							variant={"secondary"}
						>
							Profile
						</Button>
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
		</div>
	);
};

export default Navbar;
