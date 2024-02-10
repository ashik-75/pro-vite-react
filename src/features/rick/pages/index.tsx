import { Button } from "@/components/ui/button";
import { useCharactersQuery } from "../api/rick-api";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { format } from "date-fns";

const Rick = () => {
	const { isLoading, isError, data, isFetching } = useCharactersQuery();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (isError) {
		return <div>Something went wrong!</div>;
	}

	return (
		<div className="space-y-5 font-zila">
			<h1>Rick and morty</h1>
			<Button>
				{isFetching ? <Loader className="animate-spin" /> : "Oye"}
			</Button>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{data?.results.map((ch) => (
					<Link to={`/${ch.id}`}>
						<div key={ch.id} className="p-4 rounded-3xl border">
							<img className="rounded-3xl" src={ch.image} alt="" />
							<h1 className="font-bold">
								{ch.name} - {format(new Date(), "hh:mm:ss aaa")}
							</h1>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Rick;
