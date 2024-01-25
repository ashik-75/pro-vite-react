import { Routes, Route } from "react-router-dom";
import Keep from "./features/microblog/pages/keep";
import RequireAuth from "./components/composite/auth-guard";
import LoginPage from "./features/auth/pages/login-page";
import RegisterPage from "./features/auth/pages/register-page";
import AddNote from "./features/microblog/pages/add-note";
import Navbar from "./components/composite/nav-bar";
import UserList from "./features/users/user-list";
import PersistLogin from "./components/composite/persist-login";

const App = () => {
	return (
		<div className="space-y-10 font-inter container">
			<Navbar />
			<Routes>
				<Route element={<PersistLogin />}>
					<Route path="/" element={<Keep />} />
					<Route path="/me" element={<RequireAuth />}>
						<Route path="add-note" element={<AddNote />} />
						<Route path="users" element={<UserList />} />
					</Route>
				</Route>
				<Route path="/">
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
