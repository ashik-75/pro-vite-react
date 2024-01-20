// import { format } from "date-fns";
// import { Note } from "../types/note.types";
// import { Button } from "@/components/ui/button";
// import { useDeleteNoteMutation } from "../api/post-slice";
// import { Loader, Trash } from "lucide-react";
// import { toast } from "react-hot-toast";
// import EditNote from "./edit-form";

// const NoteDetails = ({ note }: { note: Note }) => {
// 	const [deleteNote, { isLoading }] = useDeleteNoteMutation();

// 	const handleDelete = async () => {
// 		const resonse = await deleteNote(note.id);

// 		if ("error" in resonse) {
// 			toast.error("Something went wrong");
// 		} else {
// 			toast.success("Yes, deleted successfully");
// 		}
// 	};
// 	return (
// 		<div className="border rounded-3xl p-5 relative">
// 			<h1 className="font-bold text-2xl">{note.title}</h1>
// 			<p>{note.message}</p>

// 			<p>{format(note.updatedAt, "PPP")}</p>
// 			<p>Category: {note?.category?.name || "No Category"}</p>
// 			<div className="flex gap-2">
// 				<button onClick={handleDelete}>
// 					{isLoading ? (
// 						<Loader size={16} className="animate-spin" />
// 					) : (
// 						<Trash size={16} />
// 					)}
// 				</button>

// 				<EditNote note={note} />
// 			</div>
// 		</div>
// 	);
// };

// export default NoteDetails;
