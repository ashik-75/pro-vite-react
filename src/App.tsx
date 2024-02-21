import { Routes, Route } from "react-router-dom";
import Navbar from "./components/composite/nav-bar";
import Home from "./pages/Home";
import Login from "./pages/login";
import toast from "react-hot-toast";

const App = () => {
	return (
		<div className="space-y-5 font-inter md:container ">
			<Navbar />
			<div className="p-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={<Login fn={(info) => toast.error(JSON.stringify(info))} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
