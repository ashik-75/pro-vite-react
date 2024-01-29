import { Link, useParams } from "react-router-dom";
import { useCharacterQuery } from "../api/rick-api";
import LoaderOne from "@/components/composite/loader-one";

const Details = () => {
	const params = useParams();
	const { data, isLoading, isError } = useCharacterQuery(params?.id ?? "", {
		skip: params?.id ? false : true,
	});
	if (!isLoading && isError) {
		return <div>Something went wrong</div>;
	}

	if (isLoading) {
		return <LoaderOne />;
	}

	if (!data && !isLoading && !isLoading) {
		return <div>Nothing found</div>;
	}

	return (
		<div className="space-y-5">
			<Link to={"/"}>Back</Link>

			<div>
				<img src={data?.image} alt="" />
				<h1>{data?.name}</h1>

				<p>{data?.created}</p>
			</div>
		</div>
	);
};

export default Details;
