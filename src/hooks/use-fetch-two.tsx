import { useCallback, useEffect, useState } from "react";

type FetchState<T> = {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
	refetch: () => void;
	isCached: boolean;
};

const useFetch = <T = unknown,>(
	url: string,
	options: RequestInit
): FetchState<T> => {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		error: null,
		refetch: () => {},
		isLoading: false,
		isCached: false,
	});

	const fetchData = useCallback(
		async (ignoreCache: boolean = false) => {
			setState((prevState) => ({ ...prevState, isLoading: true }));
			try {
				let data: T;
				let isCached = false;
				const cache = sessionStorage.getItem(url);
				if (cache && !ignoreCache) {
					data = JSON.parse(cache);
					isCached = true;
				} else {
					const response = await fetch(url, options);
					if (!response.ok) {
						throw new Error(response.statusText);
					}

					data = await response.json();
					sessionStorage.setItem(url, JSON.stringify(data));
				}

				setState((prev) => ({
					...prev,
					isCached: isCached,
					data,
					isLoading: false,
					error: null,
					refetch: () => fetchData(true),
				}));
			} catch (error) {
				setState((prevState) => ({
					...prevState,
					isLoading: false,
					data: null,
					error: error as Error,
				}));
			}
		},
		[url, options]
	);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return state;
};

export default useFetch;
