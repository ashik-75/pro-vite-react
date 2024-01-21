import { format, formatDistance } from "date-fns";
import { Note } from "../types/note.types";
import { useDeleteNoteMutation } from "../api/post-slice";
import { Loader, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import EditNote from "./edit-form";

const NoteCard = ({ note }: { note: Note }) => {
	const [deleteNote, { isLoading }] = useDeleteNoteMutation();

	const handleDelete = async () => {
		const resonse = await deleteNote(note.id);

		if ("error" in resonse) {
			toast.error("Something went wrong");
		} else {
			toast.success("Yes, deleted successfully");
		}
	};
	return (
		<div className="border rounded-3xl p-5 space-y-2 border-zinc-200/50 hover:border-zinc-300 cursor-pointer duration-700">
			<h1 className="font-bold text-xl text-zinc-700">{note.title}</h1>
			<div>
				{note?.category?.name ? (
					<span className="px-3 py-0.5 text-xs rounded-3xl border text-zinc-500">
						{note?.category?.name}
					</span>
				) : (
					<span className="italic text-muted-foreground">Empty category</span>
				)}
			</div>

			<p className="text-sm text-zinc-600">{note.message}</p>

			<p className="text-xs text-zinc-400 italic">
				{formatDistance(new Date(), note.updatedAt, { addSuffix: true })} ago
			</p>
			<div className="flex gap-2">
				<button className="border p-2 rounded-xl" onClick={handleDelete}>
					{isLoading ? (
						<Loader size={16} className="animate-spin" />
					) : (
						<Trash className="text-zinc-500" size={16} />
					)}
				</button>

				<EditNote note={note} />
			</div>
		</div>
	);
};

export default NoteCard;
