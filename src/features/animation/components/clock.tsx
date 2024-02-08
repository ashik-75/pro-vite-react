import { useEffect, useState } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const id = window.setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			console.log("Calling when unmount");
			clearInterval(id);
		};
	}, []);

	if (time === null) return;

	return (
		<div>
			<p>Time Now : {time.toLocaleTimeString()}</p>
		</div>
	);
};

export default Clock;
