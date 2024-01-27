import Sidebar from "./components/layout/side-bar";
import Header from "./components/layout/header";
import RootRoutes from "./routes";

export default function Component() {
	return (
		<div className="min-h-screen w-full ">
			<div className="hidden md:fixed md:w-[280px] h-full top-0 left-0 border-r bg-gray-50/40 md:block dark:bg-gray-800/40">
				<Sidebar />
			</div>
			<div className="flex flex-col md:ml-[280px] h-full">
				<Header />
				<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 h-full">
					<RootRoutes />
				</main>
			</div>
		</div>
	);
}
