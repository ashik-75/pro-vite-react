import { Input } from "@/components/ui/input";
import { ReactNode, useState } from "react";

const InputComponent = ({
	children,
}: {
	children: (info: string) => ReactNode;
}) => {
	const [search, setSearch] = useState("");

	return (
		<div className="space-y-5">
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="e.g : write your dream?"
			/>

			<div>{children(search)}</div>
		</div>
	);
};

export default InputComponent;
