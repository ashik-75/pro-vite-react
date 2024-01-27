import {
	BellIcon,
	HomeIcon,
	LineChartIcon,
	Package2Icon,
	PackageIcon,
	Rocket,
	ShoppingCartIcon,
	UsersIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const items = [
	{
		label: "Home",
		url: "/",
		icon: HomeIcon,
	},
	{
		label: "Orders",
		url: "/orders",
		icon: ShoppingCartIcon,
	},
	{
		label: "Projects",
		url: "/projects",
		icon: PackageIcon,
	},
	{
		label: "Customers",
		url: "/customers",
		icon: UsersIcon,
	},
	{
		label: "Analytics",
		url: "/analytics",
		icon: LineChartIcon,
	},
];

const Sidebar = () => {
	return (
		<div className="flex h-full max-h-screen flex-col gap-2">
			<div className="flex h-[60px] items-center border-b px-6">
				<Link className="flex items-center gap-2 font-semibold" to="#">
					<Package2Icon className="h-6 w-6" />
					<span className="">Prism</span>
				</Link>
				<Button variant={"secondary"} className="ml-auto">
					<BellIcon className="h-4 w-4" />
					<span className="sr-only">Toggle notifications</span>
				</Button>
			</div>
			<div className="flex-1 overflow-auto py-2">
				<SideBarLinks />
			</div>
			<div className="mt-auto p-4">
				<div className="p-5 rounded-3xl space-y-2 border">
					<h1 className="text-xl font-bold text-zinc-700">Plan Upgrade</h1>
					<p className="text-sm">
						Upgrade to our premium plan and unlock all the amazing features.
					</p>

					<Button size={"sm"}>
						Upgrade Now
						<Rocket className="ml-2" size={16} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

const SideBarLinks = () => {
	const location = useLocation();

	return (
		<nav className="grid items-start px-4 text-sm font-medium">
			{items.map((item) => {
				const Icon = item.icon;

				return (
					<Link
						className={cn(
							"flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
							location.pathname === item.url && "bg-gray-100 dark:bg-gray-800"
						)}
						to={item.url}
					>
						<Icon className="h-4 w-4" />
						{item.label}
					</Link>
				);
			})}
		</nav>
	);
};
