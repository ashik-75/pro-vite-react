import { useEffect, useState } from "react";

export const usePersist = () => {
	const [isPersist, setIsPersist] = useState(() => {
		const persist = localStorage.getItem("persist");
		return persist ? JSON.parse(persist) : false;
	});

	useEffect(() => {
		localStorage.setItem("persist", JSON.stringify(isPersist));
	}, [isPersist]);
	return [isPersist, setIsPersist];
};
