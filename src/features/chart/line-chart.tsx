import {
	Button,
	Card,
	DateRangePicker,
	DateRangePickerItem,
	DateRangePickerValue,
	Dialog,
	DialogPanel,
	LineChart,
	Title,
} from "@tremor/react";
import { useEffect, useState } from "react";

import {
	ValueType,
	NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipProps } from "recharts";
import { moneFlows } from "@/lib/fake-data";
import { format } from "date-fns";

const CustomDateRangePickerItem = ({
	key,
	months,
}: {
	key: string;
	months: number;
}) => {
	const from = new Date();
	from.setMonth(from.getMonth() - months + 1); // Adding 1 to include the current month
	const to = new Date();

	return (
		<DateRangePickerItem key={key} value={key} from={from} to={to}>
			{`Last ${months} month${months > 1 ? "s" : ""}`}
		</DateRangePickerItem>
	);
};

function dateRangeByMonth(month: number, day = 0) {
	const today = new Date();
	today.setMonth(today.getMonth() - month);
	today.setDate(today.getDate() - day);

	return today;
}

const LineChartX = () => {
	const [chartdata, setChartData] = useState(moneFlows ?? []);
	const [selectedDate, setSelectedDate] = useState<DateRangePickerValue>({
		from: undefined,
		to: undefined,
	});

	console.log({ chartdata, selectedDate });
	useEffect(() => {
		const filterValued = moneFlows.filter((item) => {
			const currentDate = new Date(item.date);
			if (selectedDate.from && selectedDate.to) {
				const fromDate = new Date(selectedDate.from);
				const toDate = new Date(selectedDate.to);
				console.log("ENTER 1");
				return fromDate <= currentDate && toDate >= currentDate;
			} else if (selectedDate.from) {
				const fromDate = new Date(selectedDate.from);
				console.log("ENTER 2");
				return format(currentDate, "PPP") === format(fromDate, "PPP");
			} else {
				console.log("ENTER 3");
				return true;
			}
		});

		console.log("ENTER AGAIN", { filterValued });

		setChartData(filterValued);
	}, [selectedDate]);
	return (
		<div className="max-w-3xl">
			<Card>
				<div className="flex justify-between">
					<Title>PPR</Title>

					<DateRangePicker onValueChange={setSelectedDate}>
						<DateRangePickerItem
							key="three"
							value="three"
							from={dateRangeByMonth(0, 3)}
							to={dateRangeByMonth(0)}
						>
							Last 3 days
						</DateRangePickerItem>
						<DateRangePickerItem
							key="seven"
							value="seven"
							from={dateRangeByMonth(0, 7)}
							to={dateRangeByMonth(0)}
						>
							Last 7 days
						</DateRangePickerItem>
						<DateRangePickerItem
							key="fitheen"
							value="fitheen"
							from={dateRangeByMonth(0, 15)}
							to={dateRangeByMonth(0)}
						>
							Last 15 days
						</DateRangePickerItem>
						<DateRangePickerItem
							key="month"
							value="month"
							from={dateRangeByMonth(1)}
							to={dateRangeByMonth(0)}
						>
							Last 1 month
						</DateRangePickerItem>
						<DateRangePickerItem
							key="quarter"
							value="quarter"
							from={dateRangeByMonth(3)}
							to={dateRangeByMonth(0)}
						>
							Last 3 month
						</DateRangePickerItem>
						<DateRangePickerItem
							key="half"
							value="half"
							from={dateRangeByMonth(6)}
							to={dateRangeByMonth(0)}
						>
							Last 6 month
						</DateRangePickerItem>
						<DateRangePickerItem
							key="full"
							value="full"
							from={dateRangeByMonth(12)}
							to={dateRangeByMonth(0)}
						>
							Last 12 month
						</DateRangePickerItem>
					</DateRangePicker>
				</div>
				<LineChart
					className="h-72 mt-4"
					data={chartdata.map((item) => ({
						...item,
						date: format(item.date, "dd LLL u"),
					}))}
					index="date"
					categories={["income", "expense"]}
					colors={["teal", "orange"]}
					yAxisWidth={30}
					curveType="natural"
					showLegend={true}
					showAnimation={true}
					animationDuration={2000}
				/>
			</Card>
		</div>
	);
};

export default LineChartX;
