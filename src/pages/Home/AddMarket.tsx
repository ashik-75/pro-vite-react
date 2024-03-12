import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMarkets } from "./queries";
import useRealmApp from "@/hooks/useRealmApp";
import toast from "react-hot-toast";

const marketSchema = z.object({
	name: z.string().min(5, {
		message: " Minimam 5 character needed",
	}),
	old: z.string().max(2, {
		message: "Maximum two digit accepted",
	}),
	region: z
		.string()
		.min(3, {
			message: "Max 3 character",
		})
		.max(6, {
			message: "Max 6 character",
		}),
});

type MarketSchemaType = z.infer<typeof marketSchema>;

const AddMarket = () => {
	const queryClient = useQueryClient();
	const { realmApp } = useRealmApp();
	const { formState, handleSubmit, register, reset } =
		useForm<MarketSchemaType>({
			resolver: zodResolver(marketSchema),
		});
	const { mutate, isPending } = useMutation({
		mutationFn: (data) => addMarkets(realmApp, data),
		onSuccess: (info) => {
			console.log(info);
			toast.success("Addeded");
			reset();
			queryClient.invalidateQueries(["markets"]);
		},
	});

	const onSubmit = (data: MarketSchemaType) => {
		console.log(data);
		mutate(data);
	};

	return (
		<form className="max-w-md space-y-4 mb-5" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input
					{...register("name")}
					type="text"
					placeholder="enter name"
					className="border rounded-lg outline-none border-blue-300 w-full px-4 py-2"
				/>
			</div>

			<div>
				<input
					{...register("old")}
					type="text"
					placeholder="enter old"
					className="border rounded-lg outline-none border-blue-300 w-full px-4 py-2"
				/>
			</div>

			<div>
				<input
					{...register("region")}
					type="text"
					placeholder="enter region"
					className="border rounded-lg outline-none border-blue-300 w-full px-4 py-2"
				/>
			</div>

			<button className="border px-3 py-2 rounded-lg" type="submit">
				submit {isPending && "Loading"}
			</button>
		</form>
	);
};

export default AddMarket;
