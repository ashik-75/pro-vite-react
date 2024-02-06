import { useState } from "react";

const usePrevious = <T,>(value: T) => {
	const [current, setCurrent] = useState(value);
	const [previous, setPrevious] = useState<T | null>(null);

	if (value !== current) {
		setPrevious(current);
		setCurrent(value);
	}

	return previous;
};

export default usePrevious;
