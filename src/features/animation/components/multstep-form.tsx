import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const initialData = {
	name: "",
	email: "",
	country: "",
	division: "",
	zila: "",
	address: "",
};

const MultistepForm = () => {
	const [formData, setFormData] = useState(initialData);
	const [step, setStep] = useState(1);

	const handleNextStep = () => {
		setStep((prev) => (prev === 3 ? prev : prev + 1));
	};

	const handlePrevStep = () => {
		setStep((prev) => (prev === 1 ? prev : prev - 1));
	};

	const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.success("Submitted");
		console.log(formData);
	};

	console.log(Object.values(formData).every((dt) => dt.length > 0));

	if (step === 1) {
		return (
			<div className="max-w-md space-y-5">
				<Progress value={step * 33} max={3} />
				<form className="space-y-4">
					<div>
						<Input
							name="name"
							onChange={handlechange}
							value={formData.name}
							placeholder="e.g enter name"
						/>
					</div>

					<div>
						<Input
							name="email"
							type="email"
							value={formData.email}
							onChange={handlechange}
							placeholder="e.g safak@gmail.com"
						/>
					</div>
				</form>

				<div className="space-y-2">
					<Button
						onClick={handleNextStep}
						className="w-full"
						variant={"secondary"}
						disabled={!formData.name || !formData.email}
					>
						Next
					</Button>
				</div>
			</div>
		);
	}

	if (step === 2) {
		return (
			<div className="max-w-md space-y-5">
				<Progress value={step * 33} max={100} />
				<form className="space-y-4">
					<div>
						<Input
							name="country"
							value={formData.country}
							onChange={handlechange}
							placeholder="e.g country code"
						/>
					</div>

					<div>
						<Input
							name="division"
							type="text"
							value={formData.division}
							onChange={handlechange}
							placeholder="e.g division name"
						/>
					</div>
				</form>

				<div className="space-y-2">
					<Button
						onClick={handleNextStep}
						className="w-full"
						variant={"secondary"}
						disabled={!formData.division || !formData.country}
					>
						Next
					</Button>
					<Button
						onClick={handlePrevStep}
						className="w-full"
						variant={"secondary"}
					>
						Previous
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-md space-y-5">
			<Progress value={step * 33} max={100} />
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<Input
						value={formData.zila}
						name="zila"
						onChange={handlechange}
						placeholder="e.g your zila"
					/>
				</div>

				<div>
					<Input
						value={formData.address}
						name="address"
						type="text"
						onChange={handlechange}
						placeholder="e.g your address"
					/>
				</div>
				<div className="space-y-2">
					<Button
						onClick={handlePrevStep}
						type="button"
						className="w-full"
						variant={"secondary"}
					>
						Previous
					</Button>

					<Button
						disabled={!Object.values(formData).every((dt) => dt.length > 0)}
						type="submit"
						className="w-full"
						variant={"secondary"}
					>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default MultistepForm;
