import { Loader } from "lucide-react";

const LoaderOne = () => {
	return (
		<div className="h-24 flex items-center justify-center">
			<Loader className="animate-spin" />
		</div>
	);
};

export default LoaderOne;
