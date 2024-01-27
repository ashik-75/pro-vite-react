import { Package2Icon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<header className="flex sticky top-0 left-0 z-10 h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100 px-6 dark:bg-gray-800/40">
			<Link className="md:hidden" to="#">
				<Package2Icon className="h-6 w-6" />
				<span className="sr-only">Home</span>
			</Link>
			<div className="w-full flex-1">
				<form>
					<div className="relative">
						<SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
						<Input
							className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
							placeholder="Search projects..."
							type="text"
						/>
					</div>
				</form>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800">
						<img
							alt="Avatar"
							className="rounded-full"
							height="32"
							src="/ai-1.jpg"
							style={{
								aspectRatio: "32/32",
								objectFit: "cover",
							}}
							width="32"
						/>
						<span className="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Header;
