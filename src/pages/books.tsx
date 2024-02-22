import { Loader } from "lucide-react";
import { useState } from "react";

const Books = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const [books, setBooks] =
		useState<{ id: number; body: string; title: string }[]>();

	const handlePress = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const books = await response.json();
			setLoading(false);
			setBooks(books);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				setLoading(false);
				setError(true);
			}
		}
	};

	return (
		<div>
			<h1>Show All the books</h1>
			<button onClick={handlePress} className="p-3 border">
				Show the mango
			</button>

			<div>{error && <div>Something went wrong!</div>}</div>

			<div>
				{loading && (
					<div>
						<span className="sr-only">Loading</span>
						<Loader className="animate-spin" />
					</div>
				)}
			</div>

			<ul>
				{books?.map((book) => (
					<li id="book" key={book.id}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Books;
