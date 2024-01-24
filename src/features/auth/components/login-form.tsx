import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useLoginMutation } from "../api/auth-api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { tokenSet } from "../api/auth-slice";

const loginSchema = z.object({
	user: z.string(),
	pwd: z.string(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});
	const { isValid } = form.formState;

	const onSubmit = (data: LoginSchemaType) => {
		login(data)
			.unwrap()
			.then((response) => {
				dispatch(tokenSet({ ...response, user: data }));
				navigate("/");
				toast.success("Logged in");
			})
			.catch(() => {
				toast.error("Failed login");
			});
	};
	return (
		<div className="max-w-md">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="user"
						render={({ field }) => (
							<FormItem>
								<FormLabel>User</FormLabel>
								<Input placeholder="e.g : alex" {...field} />
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="pwd"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<Input type="password" placeholder="*****" {...field} />
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button disabled={isLoading || !isValid}>
						{" "}
						{isLoading && (
							<Loader className="animate-spin mr-2" size={16} />
						)}{" "}
						Login{" "}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
