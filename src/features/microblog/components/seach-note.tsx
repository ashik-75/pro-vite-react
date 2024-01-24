import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import qs from "query-string";
import { Button } from "@/components/ui/button";
import SelectSearchCategory from "./select-search-category";

function SearchNote() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const [search, setSearch] = useState(queryParams.get("search") ?? "");
	const [category, setCategory] = useState("");
	const router = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const query = qs.stringify(
			{
				search,
				category,
				page: 1,
			},
			{ skipEmptyString: true, skipNull: true }
		);
		toast.success(query);
		router(`?${query}`);
	};

	const handleReset = () => {
		const query = qs.stringify(
			{
				search: "",
				category: "",
				page: 1,
			},
			{ skipEmptyString: true, skipNull: true }
		);
		setSearch("");
		setCategory("");
		toast.success(query);
		router(`?${query}`);
	};
	return (
		<div className="max-w-md">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex gap-4">
					<Input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="e.g : your note"
						type="search"
					/>

					<Select value={category} onValueChange={(val) => setCategory(val)}>
						<SelectTrigger>
							<SelectValue placeholder="select category" />
						</SelectTrigger>
						<SelectContent>
							<SelectSearchCategory />
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-2">
					<Button type="submit" variant={"secondary"}>
						Search
					</Button>
					<Button onClick={handleReset} type="button" variant={"secondary"}>
						Reset
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SearchNote;
