import { Input } from "@/components/ui/input";
import useFavicon from "@/hooks/use-favicon";
import usePrevious from "@/hooks/use-previous";
import { useState } from "react";

function Animation() {
	const [textarea, setTextarea] = useState("");
	const [f, setF] = useState("");
	const previous = usePrevious(f);

	useFavicon("/xing.png");
	return (
		<div className="max-w-md">
			<div>previous : {previous}</div>
			<div>current: {f}</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setF(textarea);
					setTextarea("");
				}}
			>
				<Input onChange={(e) => setTextarea(e.target.value)} value={textarea} />
			</form>
		</div>
	);
}

export default Animation;
