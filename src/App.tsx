import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keep from "./features/microblog/pages/keep";

const App = () => {
	return (
		<div className="p-10 font-inter container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Keep />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
