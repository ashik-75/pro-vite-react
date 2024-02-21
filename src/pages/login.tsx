import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

const Login = ({
	fn,
}: {
	fn: (info: { username: string; password: string }) => void;
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		fn({ username, password });
		// toast.success(JSON.stringify({ username, password }));
	};
	return (
		<div className="max-w-md">
			<form onSubmit={handleSubmit} className="space-y-2">
				<div>
					<Input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="e.g: enter your username"
					/>
				</div>

				<div>
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="e.g: enter your password"
					/>
				</div>

				<Button disabled={!username || !password}>Login</Button>
			</form>
		</div>
	);
};

export default Login;
