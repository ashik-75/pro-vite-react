import { SelectItem } from "@/components/ui/select";
import { useGetAllCategoryQuery } from "../api/category-slice";

const SelectCategory = () => {
	const { data } = useGetAllCategoryQuery();
	return (
		<div>
			{data?.categories?.map((category) => (
				<SelectItem key={category.id} value={category.id?.toString()}>
					{category.name}
				</SelectItem>
			))}
		</div>
	);
};

export default SelectCategory;
