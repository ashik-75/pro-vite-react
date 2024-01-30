import { useEffect, useState } from "react";

export const useDebounce = (value: string, duration: number) => {
	const [text, setText] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setText(value);
			console.log("Set value");
		}, duration);
		return () => {
			console.log("Clear-timeout");
			clearTimeout(timeout);
		};
	}, [value, duration]);

	return text;
};
