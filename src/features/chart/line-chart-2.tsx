import { growthData } from "@/lib/fake-data";
import { Card, EventProps, LineChart } from "@tremor/react";
import { useState } from "react";

const formatValue = (value: number) => `${value.toFixed(1)}%`;
const LineChartTwo = () => {
	const [value, setValue] = useState<EventProps>(undefined);

	return (
		<div className="space-y-5 max-w-3xl">
			<Card className="p-1">
				<LineChart
					colors={["cyan"]}
					yAxisWidth={50}
					categories={["rate"]}
					index="year"
					curveType="monotone"
					data={growthData}
					showAnimation={true}
					className="h-52"
					valueFormatter={formatValue}
					onValueChange={(v) => setValue(v)}
					connectNulls={true}
				/>
			</Card>
			<Card>
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</Card>
		</div>
	);
};

export default LineChartTwo;
