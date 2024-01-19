import { BrowserRouter, Routes, Route } from "react-router-dom";
import Color from "./features/color";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Color />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
