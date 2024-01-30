import { Outlet } from "react-router-dom";

const BuiltInHooks = () => {
	return (
		<div>
			<h1>Show all the hooks</h1>

			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default BuiltInHooks;
