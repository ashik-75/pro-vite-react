const todosArray: unknown[] = [];

async function fetchData(ids: number[]) {
	try {
		const response = ids.map(async (id) => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${id}`
			);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const todo = await response.json();
			todosArray.push(todo);
		});

		console.log(response);
		// ids.forEach(async (id) => {
		// 	const response = await fetch(
		// 		`https://jsonplaceholder.typicode.com/todos/${id}`
		// 	);

		// 	if (!response.ok) {
		// 		throw new Error("Something went wrong");
		// 	}

		// 	const todo = await response.json();
		// 	todosArray.push(todo);
		// });
	} catch (error) {
		// another things
		console.log(error);
	}
}
fetchData([1, 2, 4, 5]);

console.log(todosArray);
