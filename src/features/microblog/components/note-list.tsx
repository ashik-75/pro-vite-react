import { useState } from "react";
import { useGetNotesQuery } from "../api/post-slice";

import NoteDetails from "./note";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";

import { useSearchParams } from "react-router-dom";

const NoteList = () => {
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const { isLoading, data, isFetching } = useGetNotesQuery({
		page: Math.max(Number(searchParams.get("page")), 1),
		search: searchParams.get("search") ?? "",
	});

	if (isLoading) {
		return <div>Loading ....</div>;
	}

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
					onClick={() => setPage((prev) => prev - 1)}
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
					onClick={() => setPage((prev) => prev + 1)}
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
