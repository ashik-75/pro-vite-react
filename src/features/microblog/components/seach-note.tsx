import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import SelectCategory from "./select-category";
import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { Button } from "@/components/ui/button";

function SearchNote() {
	const location = useLocation();
	const q = queryString.parse(location.search);
	const [search, setSearch] = useState((q.search as string) ?? "");
	const [category, setCategory] = useState("");
	const router = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const qs = queryString.stringify(
			{
				search,
				category,
				page: 1,
			},
			{ skipEmptyString: true, skipNull: true }
		);
		toast.success(qs);
		router(`?${qs}`);
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
							<SelectCategory />
						</SelectContent>
					</Select>
				</div>
				<Button>Search</Button>
			</form>
		</div>
	);
}

export default SearchNote;
