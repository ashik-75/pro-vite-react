import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const PasswordToggle = () => {
	const [input, setInput] = useState("");
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow((p) => !p);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		toast.success("submitted");
		setInput("");
	};
	return (
		<div className="max-w-md">
			<form onSubmit={handleSubmit}>
				<div className="relative">
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="e.g : write anything?"
						type={show ? "text" : "password"}
					/>

					<button
						className="absolute top-3 right-4"
						type="button"
						onClick={toggleShow}
					>
						{show ? <Eye size={16} /> : <EyeOff size={16} />}
					</button>
				</div>

				<br />
				<Button disabled={input.length === 0} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};

export default PasswordToggle;
