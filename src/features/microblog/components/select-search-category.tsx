import { SelectItem } from "@/components/ui/select";
import { useGetAllCategoryQuery } from "../api/category-slice";

const SelectSearchCategory = () => {
	const { data } = useGetAllCategoryQuery();
	return (
		<div>
			{data?.categories?.map((category) => (
				<SelectItem key={category.id} value={category.name}>
					{category.name}
				</SelectItem>
			))}
		</div>
	);
};

export default SelectSearchCategory;
