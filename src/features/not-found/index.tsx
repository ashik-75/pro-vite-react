import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="h-full flex items-center justify-center min-h-[80dvh]">
			<Card className="max-w-2xl p-5 text-center space-y-4">
				<h1 className="text-xl font-bold text-purple-500">404</h1>
				<h1 className="text-4xl font-black">Page not found</h1>
				<p>Sorry, we couldn’t find the page you’re looking for.</p>
				<div>
					<Link to={"/"} className="underline underline-offset-2">
						Back to home
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default NotFound;
