import { Routes, Route } from "react-router-dom";
import Rick from "./features/rick/pages";
import Details from "./features/rick/pages/details";
import Navbar from "./components/composite/nav-bar";

const App = () => {
	return (
		<div className="space-y-5 font-inter md:container ">
			<Navbar />
			<div className="p-5">
				<Routes>
					<Route path="/" element={<Rick />} />
					<Route path="/:id" element={<Details />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
