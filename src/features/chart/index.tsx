import AreaChartOne from "./area-chart-1";
import LineChart from "./line-chart";
import LineChartTwo from "./line-chart-2";
import ProgressBar from "./progress-bar";

const Chart = () => {
	return (
		<div className="space-y-5 font-inter">
			<ProgressBar />
			<LineChart />
			<LineChartTwo />
			<AreaChartOne />
		</div>
	);
};

export default Chart;
