import { Link } from "react-router-dom";

import AuthBar from "./auth-bar";

const Navbar = () => {
	return (
		<div className="flex justify-between p-5">
			<Link to={"/"}>
				<img src="/ai-1.jpg" className="h-10 w-10 rounded-xl" />
			</Link>

			<div className="space-x-5 flex gap-5">
				<AuthBar />
			</div>
		</div>
	);
};

export default Navbar;
