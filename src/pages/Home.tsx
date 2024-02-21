import { useState } from "react";

const Home = () => {
	const [count, setCount] = useState(2);
	return (
		<div>
			<h1>value: {count}</h1>

			<button
				className="border p-2 mr-1"
				onMouseDown={() => setCount((p) => p + 1)}
			>
				Increment
			</button>
			<button className="border p-2" onMouseDown={() => setCount((p) => p - 1)}>
				decrement
			</button>

			<button className="border p-2" onMouseDown={() => setCount(0)}>
				reset
			</button>
		</div>
	);
};

export default Home;
