import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Customers = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<Button>Show me</Button>
				</DialogTrigger>
				<DialogContent>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
						commodi nam quia ea libero ducimus nesciunt quis doloribus cum
						provident.
					</p>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Customers;
