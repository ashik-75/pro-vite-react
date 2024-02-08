import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="w-full sticky top-0 z-10  p-5 bg-slate-50 items-center justify-between">
			<Link to={"/"}>
				<img className="h-10" src="/xing.png" alt="" />
			</Link>
		</nav>
	);
};

export default Navbar;
