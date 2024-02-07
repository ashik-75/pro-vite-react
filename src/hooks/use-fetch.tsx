import { useEffect, useReducer, useRef } from "react";

type State<T> = {
	loading: boolean;
	data?: T;
	error?: Error;
};

type Cache<T> = Record<string, T>;

type Action<T> =
	| { type: "loading" }
	| { type: "fetched"; payload: T }
	| { type: "error"; payload: Error };
const initialState = {
	loading: false,
	data: undefined,
	error: undefined,
};

const useFetch = <T = unknown,>(
	url: string,
	options?: RequestInit
): State<T> => {
	const cache = useRef<Cache<T>>({});

	const fetchReducer = (state: State<T>, action: Action<T>) => {
		switch (action.type) {
			case "loading":
				return { ...initialState, loading: true };
			case "fetched":
				return { ...initialState, data: action.payload };
			case "error":
				return { ...initialState, error: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		if (!url) return;
		const fetchData = async () => {
			dispatch({ type: "loading" });

			const currentCache = cache.current[url];
			if (currentCache) {
				dispatch({ type: "fetched", payload: currentCache });
				return;
			}

			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();
				cache.current[url] = data;

				dispatch({ type: "fetched", payload: data });
			} catch (e) {
				dispatch({ type: "error", payload: e as Error });
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return state;
};

export default useFetch;
