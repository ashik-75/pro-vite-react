import { useGetNotesQuery } from "../api/post-slice";
import NoteDetails from "./note";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

const NoteList = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(location.search);
	const page = Number(searchParams.get("page")) ?? 1;
	const search = searchParams.get("search") ?? "";
	const category = searchParams.get("category") ?? "";

	const query = qs.stringify(
		{ page, search, category },
		{ skipEmptyString: true, skipNull: true }
	);
	console.log({ query });
	const { isLoading, data, isFetching } = useGetNotesQuery(query);

	if (isLoading) {
		return <div>Loading ....</div>;
	}

	const handlePagination = (btnType: "prev" | "next") => {
		if (btnType === "prev") {
			const query = qs.stringify(
				{
					search,
					page: page - 1,
					category,
				},
				{ skipEmptyString: true, skipNull: true }
			);
			navigate(`?${query}`);
		} else {
			const query = qs.stringify(
				{
					search,
					page: page + 1,
					category,
				},
				{ skipEmptyString: true, skipNull: true }
			);
			navigate(`?${query}`);
		}
	};

	return (
		<div className="space-y-5">
			<div>
				show{" "}
				{(data?.limit || 0) * ((data?.page || 1) - 1) +
					(data?.notes?.length || 0)}{" "}
				out of {data?.count}
			</div>
			<div className="flex gap-2">
				<Button
					onClick={() => handlePagination("prev")}
					disabled={page === 1}
					size={"sm"}
					variant={"secondary"}
				>
					<ChevronLeft className="text-zinc-500" />
				</Button>
				<Button size={"sm"} variant={"secondary"} className="w-10">
					{isFetching ? (
						<Loader className="animate-spin" size={16} />
					) : (
						<span>{data?.page}</span>
					)}
				</Button>
				<Button
					onClick={() => handlePagination("next")}
					disabled={data?.totalPage === page}
					size={"sm"}
					variant={"secondary"}
				>
					<ChevronRight className="text-zinc-500" />
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{data?.notes.map((note) => (
					<NoteDetails note={note} key={note.id} />
				))}
			</div>
		</div>
	);
};

export default NoteList;
