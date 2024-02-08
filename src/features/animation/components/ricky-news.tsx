import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-fetch";
import { Loader } from "lucide-react";
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

const RickyNews = () => {
	const [search, setSearch] = useState("");
	const [tag, setTag] = useState("");
	const [page, setPage] = useState(1);

	const { data, error, loading } = useFetch<Root>(
		`https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${tag}`
	);

	return (
		<div className="space-y-5">
			<div className="grid grid-cols-2 gap-5">
				<div className="grid grid-cols-2 gap-5">
					<Input
						value={search}
						placeholder="e.g: provide data"
						onChange={(e) => {
							setSearch(e.target.value);
							setPage(1);
						}}
					/>

					<Select
						value={tag}
						onValueChange={(value) => {
							setTag(value);
							setPage(1);
						}}
					>
						<SelectTrigger>
							<SelectValue placeholder="choose status" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="alive">Alive</SelectItem>
								<SelectItem value="dead">Dead</SelectItem>
								<SelectItem value="unknown">Unknown</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex gap-3">
					<Button
						disabled={page === 1}
						onClick={() => setPage((p) => p - 1)}
						variant={"secondary"}
					>
						Previous
					</Button>
					<Button
						disabled={page === data?.info.pages}
						onClick={() => setPage((p) => p + 1)}
						variant={"secondary"}
					>
						Next
					</Button>

					{loading && (
						<Button
							disabled={page === data?.info.pages}
							onClick={() => setPage((p) => p + 1)}
							variant={"secondary"}
						>
							<Loader className="animate-spin" />
						</Button>
					)}
				</div>
			</div>
			<div>
				{error ? (
					<div>Wrong happen</div>
				) : data?.results.length === 0 ? (
					<div>Nothing found</div>
				) : (
					<div className="grid grid-cols-4 gap-5">
						{data?.results.map((ch) => (
							<div>
								<img className="rounded-2xl" src={ch.image} alt="" />
								<h1 className="font-medium my-1">{ch.name}</h1>
								<p className="text-sm text-zinc-500">{ch.status}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default RickyNews;
