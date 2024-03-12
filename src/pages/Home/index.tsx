import useRealmApp from "@/hooks/useRealmApp";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMarkets } from "./queries";
import MarketList from "./MarketList";
import Market from "./Market";
import AddMarket from "./AddMarket";

const Home: React.FC = () => {
	const { realmApp } = useRealmApp();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["markets"],
		queryFn: () => getMarkets(realmApp),
	});

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (isError) {
		return <div>Something went wrong!</div>;
	}

	return (
		<div>
			<AddMarket />
			<MarketList>
				{data?.map((market) => (
					<Market market={market} />
				))}
			</MarketList>
		</div>
	);
};

export default Home;
