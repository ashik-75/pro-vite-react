// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useAddCategoryMutation } from "../api/category-slice";
// import toast from "react-hot-toast";
// import { Loader, Loader2 } from "lucide-react";

// const categorySchema = z.object({
// 	name: z.string().min(3, { message: "Min 3 character" }),
// });

// type CategorySchemaType = z.infer<typeof categorySchema>;

// const CategoryForm = () => {
// 	const [addCategory] = useAddCategoryMutation();
// 	const form = useForm<CategorySchemaType>({
// 		resolver: zodResolver(categorySchema),
// 		defaultValues: {
// 			name: "",
// 		},
// 	});

// 	const { isValid, isSubmitting } = form.formState;

// 	const onSubmit = async (data: CategorySchemaType) => {
// 		const response = await addCategory(data);
// 		if ("error" in response) {
// 			toast.error("Category creation failed");
// 		} else {
// 			toast.success("Successfully created");
// 			form.reset({ name: "" });
// 		}
// 	};
// 	return (
// 		<div>
// 			<Form {...form}>
// 				<form
// 					onSubmit={form.handleSubmit(onSubmit)}
// 					className="max-w-md space-y-5"
// 				>
// 					<FormField
// 						control={form.control}
// 						name="name"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Category Name</FormLabel>
// 								<FormControl>
// 									<Input placeholder="e.g: sport" {...field} />
// 								</FormControl>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>

// 					<Button className="flex gap-2" disabled={isSubmitting || !isValid}>
// 						<span>Submit</span>
// 						{isSubmitting && <Loader className="animate-spin" size={16} />}
// 					</Button>
// 				</form>
// 			</Form>
// 		</div>
// 	);
// };

// export default CategoryForm;
