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
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useRegisterMutation } from "../api/auth-api";
import { useNavigate } from "react-router";

const registrationSchema = z
	.object({
		username: z.string().trim().toLowerCase(),
		email: z.string().email(),
		password: z
			.string()
			.regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, {
				message:
					"Password should contains 8-10 valid character, atleat 1 number and 1 special character",
			}),
		confirmPassword: z.string(),
	})
	.refine((val) => val.password === val.confirmPassword, {
		message: "Password don't match",
		path: ["confirmPassword"],
	});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
	const navigate = useNavigate();
	const [register, { isLoading }] = useRegisterMutation();
	const [passwordReveal, setPasswordReveal] = useState(false);

	const form = useForm<RegistrationSchemaType>({
		resolver: zodResolver(registrationSchema),
	});

	const onSubmit = (data: RegistrationSchemaType) => {
		console.log({ data });
		register(data)
			.unwrap()
			.then(() => {
				toast.success("Registration successfull");
				navigate("/");
			})
			.catch(() => {
				toast.error("Failed Registration");
				// navigate("/login");
			});
	};
	return (
		<div className="max-w-md">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<Input placeholder="e.g: dustin" {...field} />
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Your email</FormLabel>
								<Input placeholder="e.g : alex@gmail.com" {...field} />
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Password</FormLabel>
								<Input
									type={passwordReveal ? "text" : "password"}
									placeholder="*****"
									{...field}
								/>
								<button
									type="button"
									onClick={() => setPasswordReveal((p) => !p)}
									className="absolute top-9 right-2"
								>
									{passwordReveal ? <Eye size={16} /> : <EyeOff size={16} />}
								</button>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<Input
									type={passwordReveal ? "text" : "password"}
									placeholder="*****"
									{...field}
								/>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button disabled={isLoading}>
						{" "}
						{isLoading && (
							<Loader size={16} className="animate-spin mr-2" />
						)}{" "}
						Join{" "}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default RegistrationForm;
