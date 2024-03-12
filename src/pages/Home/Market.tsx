import { IMarket } from "./queries";

const Market = ({ market }: { market: IMarket }) => {
	return (
		<div className="border rounded-3xl p-5">
			<h1>{market.name}</h1>
			<p>{market.old}</p>
			<p>{market.region}</p>
		</div>
	);
};

export default Market;
