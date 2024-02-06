import { useState } from "react";

const useDefault = <T,>(initialState: T, defaultValue: T) => {
	const [state, setState] = useState<T>(initialState);

	const setDefault = (newValue?: T) => {
		if (newValue === undefined || newValue === null) {
			setState(defaultValue);
		} else {
			setState(newValue);
		}
	};

	return [state, setDefault] as const;
};

export default useDefault;
