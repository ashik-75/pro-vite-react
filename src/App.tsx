import { Routes, Route } from "react-router-dom";
import Rick from "./features/rick/pages";
import Details from "./features/rick/pages/details";
import Navbar from "./components/composite/nav-bar";
import BuiltInHooks from "./features/built-hooks";
import HookId from "./features/built-hooks/hook-id";
import NotFound from "./features/misc/not-found";

const App = () => {
	return (
		<div className="space-y-5 font-inter md:container ">
			<Navbar />
			<div className="p-5">
				<Routes>
					<Route path="/" element={<Rick />} />
					<Route path="/:id" element={<Details />} />
					<Route path="/hooks" element={<BuiltInHooks />}>
						<Route path="id" element={<HookId />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
