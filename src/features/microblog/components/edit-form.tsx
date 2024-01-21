import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
import { Edit, Loader } from "lucide-react";
import { useUpdateNoteMutation } from "../api/post-slice";
import toast from "react-hot-toast";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import SelectCategory from "./select-category";
import { Note } from "../types/note.types";
import { useState } from "react";

const noteSchema = z.object({
	title: z.string().min(5, { message: "Min 5 character needed" }),
	message: z.string().optional(),
	categoryId: z.coerce
		.number()
		.nullable()
		.refine((args) => typeof args !== null, {
			message: "Category is Required, please select one",
		}),
});

type NoteSchemaType = z.infer<typeof noteSchema>;

const NoteEditForm = ({
	defaultValue,
	handleClose,
}: {
	defaultValue: Note;
	handleClose: () => void;
}) => {
	const [updateNote] = useUpdateNoteMutation();
	const form = useForm<NoteSchemaType>({
		resolver: zodResolver(noteSchema),
		defaultValues: {
			title: defaultValue.title ?? "",
			message: defaultValue?.message ?? "",
			categoryId: defaultValue?.categoryId,
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (data: NoteSchemaType) => {
		const parsePayload = noteSchema
			.extend({ id: z.number() })
			.safeParse({ ...defaultValue, ...data });

		if (parsePayload.success) {
			const response = await updateNote(parsePayload.data);

			if ("error" in response) {
				toast.error("Something went wrong");
			} else {
				toast.success("Note Updated");
				form.reset({
					title: "",
					message: "",
					categoryId: null,
				});
				handleClose();
			}
		} else {
			toast.error("Wrong payload");
		}
	};

	return (
		<div className="max-w-md my-10">
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
									onValueChange={field.onChange}
									defaultValue={field.value?.toString()}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="choose category" />
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

const EditNote = ({ note }: { note: Note }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<button className="border p-2 rounded-xl">
						<Edit className="text-zinc-500" size={16} />
					</button>
				</DialogTrigger>
				<DialogContent className="max-w-md">
					<NoteEditForm defaultValue={note} handleClose={handleClose} />
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default EditNote;
