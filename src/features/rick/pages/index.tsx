import { useCharactersQuery } from "../api/rick-api";
import { Link } from "react-router-dom";

const Rick = () => {
	const { isLoading, isError, data } = useCharactersQuery();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (isError) {
		return <div>Something went wrong!</div>;
	}

	return (
		<div className="font-poppins space-y-5">
			<h1>Rick and morty</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{data?.results.map((ch) => (
					<Link to={`/${ch.id}`}>
						<div key={ch.id} className="p-4 rounded-3xl border">
							<img className="rounded-3xl" src={ch.image} alt="" />
							<h1>{ch.name}</h1>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Rick;
