import useFetch from "@/hooks/use-fetch";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface Root {
	info: Info;
	results: Result[];
}

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

export interface Result {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface Origin {
	name: string;
	url: string;
}

export interface Location {
	name: string;
	url: string;
}

function Animation() {
	const [page, setPage] = useState(1);
	const { loading, data, error } = useFetch<Root>(
		`https://rickandmortyapi.com/api/character?page=${page}`
	);

	if (loading) {
		return <div>Loading ...</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}
	console.log(data);
	return (
		<div className="">
			<div>
				<button
					className="p-2 border"
					disabled={page === 1}
					onClick={() => setPage((p) => p - 1)}
				>
					<ChevronLeft />
				</button>
				{page}
				<button
					className="p-2 border"
					disabled={page === data?.info.pages}
					onClick={() => setPage((p) => p + 1)}
				>
					<ChevronRight />
				</button>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{data?.results.map((item) => (
					<div>
						<img src={item.image} className="max-w-md rounded-3xl" alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

export default Animation;
