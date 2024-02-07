import { useCallback, useEffect, useRef } from "react";

const useInterval = (cb: () => void, delay: number | null) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleClearTimeout = useCallback(() => {
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	useEffect(() => {
		if (delay !== null) {
			timeoutRef.current = setTimeout(() => {
				cb();
			}, delay);

			return () => handleClearTimeout();
		} else {
			handleClearTimeout();
		}
	}, [delay, cb, handleClearTimeout]);

	return handleClearTimeout;
};

export default useInterval;
