import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useString } from "@/hooks/use-string";
import { useState } from "react";

const HookId = () => {
	const [search, setSearch] = useState("");

	const value = useDebounce(search, 500);
	const info = useString(
		{ search, page: null, tags: "high" },
		{ isSkipEmpty: true, isSkipNull: true }
	);

	console.log(info);

	return (
		<div className="max-w-3xl">
			<Input
				value={search}
				placeholder="e.g search ..."
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div>{value}</div>
		</div>
	);
};

export default HookId;
