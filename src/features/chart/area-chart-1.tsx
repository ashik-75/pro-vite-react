import { moneFlows } from "@/lib/fake-data";
import { AreaChart, Card } from "@tremor/react";
import { format } from "date-fns";

function AreaChartOne() {
	return (
		<div className="max-w-3xl">
			<Card>
				<AreaChart
					index="date"
					data={moneFlows.map((item) => ({
						...item,
						date: format(item.date, "dd MMM"),
					}))}
					categories={["income", "expense"]}
					colors={["green", "fuchsia"]}
					showAnimation={true}
					curveType="monotone"
					className="h-52"
					intervalType="preserveStartEnd"
				/>
			</Card>
		</div>
	);
}

export default AreaChartOne;
