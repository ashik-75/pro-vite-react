import { useEffect, useState } from "react";

const useRetry = (
	cb: () => number | void | null,
	ms: number,
	max: number = 3
) => {
	const [hasResolved, setHasResolved] = useState(false);
	useEffect(() => {
		let retry = 0;
		const id = setInterval(() => {
			if (cb()) {
				setHasResolved(true);
				clearInterval(id);
			} else if (retry >= max) {
				clearInterval(id);
			} else {
				retry += 1;
			}
			console.log({ retry });
		}, ms);

		return () => {
			clearInterval(id);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ms, max]);

	return hasResolved;
};

export default useRetry;
