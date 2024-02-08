import { Input } from "@/components/ui/input";
import { useState } from "react";

const info = ["Sanos", "Sefu", "arif", "shuvo", "Rafid", "ageba", "rafi"];

const SearchFilter = () => {
	const [input, setInput] = useState("");
	const filteredValue = info.filter((x) =>
		x.toLowerCase().includes(input.toLowerCase())
	);

	return (
		<div className="max-w-md space-y-5">
			<Input
				value={input}
				placeholder="e.g : search term"
				onChange={(e) => setInput(e.target.value)}
			/>

			<div>
				<ul className="list-inside list-disc">
					{filteredValue.length === 0
						? "No value"
						: filteredValue.map((i) => <li key={i}>{i}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default SearchFilter;
