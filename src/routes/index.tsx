import Chart from "@/features/chart";
import Customers from "@/features/customers";
import NotFound from "@/features/not-found";
import { Route, Routes } from "react-router-dom";

const RootRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Chart />} />
			<Route path="/customers" element={<Customers />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RootRoutes;
