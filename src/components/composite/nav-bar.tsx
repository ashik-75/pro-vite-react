import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="flex justify-between p-5">
			<Link to={"/"}>
				<img src="/ai-1.jpg" className="h-10 w-10 rounded-xl" />
			</Link>

			<div className="space-x-5">
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
