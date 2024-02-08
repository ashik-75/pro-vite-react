import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";

const CharacterLimit = ({
	characrerLimit = 20,
}: {
	characrerLimit?: number;
}) => {
	const [input, setInput] = useState("");
	const remaining = characrerLimit - input.length;
	const isExceeded = remaining < 0;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isExceeded) {
			alert("Limit exceeded, lower it down please");
		} else {
			toast.success("submitted");
			setInput("");
		}
	};
	return (
		<div className="max-w-md">
			<form onSubmit={handleSubmit}>
				<div>
					<p className="text-xs text-right mb-1">
						Character remaining : {remaining}
					</p>
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="e.g : write anything?"
					/>
				</div>

				<br />
				<Button disabled={input.length === 0} type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};

export default CharacterLimit;
