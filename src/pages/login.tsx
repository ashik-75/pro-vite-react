import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { FormEvent, useState } from "react";

const Login = ({
	fn,
}: {
	fn: (info: { username: string; password: string }) => void;
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<{
		username: string;
		name: string;
		email: string;
	}>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		fn({ username, password });

		setLoading(true);

		fetch(`https://jsonplaceholder.typicode.com/post`, {
			method: "POST",
			body: JSON.stringify({ title: username, body: password }),
		})
			.then((user) => {
				return user.json();
			})
			.then((u) => {
				setLoading(false);
				setData(u);
			})
			.catch((err) => console.log(err));

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

			<div>
				{loading && (
					<div>
						<span className="sr-only">Spinner</span>
						<Loader className="animate-spin" />
					</div>
				)}
			</div>
			<div>result: {data?.username}</div>
		</div>
	);
};

export default Login;
