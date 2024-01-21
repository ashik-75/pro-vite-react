import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useAddNoteMutation } from "../api/post-slice";
import toast from "react-hot-toast";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import SelectCategory from "./select-category";

const noteSchema = z.object({
	title: z.string().min(5, { message: "Min 5 character needed" }),
	message: z.string().optional(),
	categoryId: z.string().refine((data) => !isNaN(parseInt(data)), {
		message: "Select your category",
	}),
});

type NoteSchemaType = z.infer<typeof noteSchema>;

const NoteForm = () => {
	const [addNote] = useAddNoteMutation();
	const form = useForm<NoteSchemaType>({
		resolver: zodResolver(noteSchema),
		defaultValues: {
			title: "",
			message: "",
			categoryId: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (data: NoteSchemaType) => {
		console.log(data);
		const { categoryId, ...rest } = data;

		const response = await addNote({
			categoryId: parseInt(categoryId),
			...rest,
		});

		if ("error" in response) {
			console.log("ENTER the room");
			toast.error("Something went wrong");
		} else {
			form.reset({
				title: "",
				message: "",
				categoryId: "",
			});
			// form.setValue("categoryId", undefined);
			toast.success("Note added");
		}
	};

	return (
		<div className="max-w-md my-10">
			<Button
				onClick={() => toast.success(<div>{form.getValues("categoryId")}</div>)}
			>
				Show Value
			</Button>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Note title</FormLabel>
								<FormControl>
									<Input placeholder="e.g: days started with ..." {...field} />
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<Select
									value={field.value?.toString()}
									onValueChange={field.onChange}
								>
									<FormControl>
										<SelectTrigger>
											{field.value ? (
												<SelectValue placeholder="choose category" />
											) : (
												"Select category"
											)}
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectCategory />
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>write your thought</FormLabel>
								<FormControl>
									<Textarea placeholder="message ..." {...field} />
								</FormControl>
							</FormItem>
						)}
					/>

					<Button disabled={isSubmitting || !isValid} className="flex gap-2">
						<span>Submit</span>
						{isSubmitting && <Loader size={16} className="animate-spin" />}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default NoteForm;
