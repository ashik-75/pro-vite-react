import { Link } from "react-router-dom";
import NoteList from "../components/note-list";
import SearchNote from "../components/seach-note";

const Keep = () => {
	return (
		<div>
			<SearchNote />
			<Link to={"/add-note"}>Add Note</Link>
			<NoteList />
		</div>
	);
};

export default Keep;
