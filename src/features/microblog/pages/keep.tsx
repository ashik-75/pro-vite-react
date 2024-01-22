import NoteForm from "../components/note-form";
import NoteList from "../components/note-list";
import SearchNote from "../components/seach-note";

const Keep = () => {
	return (
		<div>
			<SearchNote />
			<NoteForm />
			<NoteList />
		</div>
	);
};

export default Keep;
