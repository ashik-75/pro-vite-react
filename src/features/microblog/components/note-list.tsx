import { useGetNotesQuery } from "../api/post-slice";

import NoteDetails from "./note";

const NoteList = () => {
	const { isLoading, data } = useGetNotesQuery("/note?limit=10");

	if (isLoading) {
		return <div>Loading ....</div>;
	}

	return (
		<div className="space-y-5">
			<div>
				show {data?.notes?.length} out of {data?.count}
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
