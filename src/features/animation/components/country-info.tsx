import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const CountryInfo = () => {
	const [code, setCode] = useState("usa");
	const [data, setData] = useState([]);
	const [error, setError] = useState<undefined | Error>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		let ignore = false;
		const fetchData = async () => {
			setLoading(true);
			const url = `https://restcountries.com/v3.1/name/${code}`;

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();
				if (ignore === false) {
					setLoading(false);
					setData(data);
					setError(undefined);
				}
				console.log({ ignore });
			} catch (error) {
				if (ignore === false) {
					setLoading(false);
					setError(error as Error);
				}
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, [code]);

	if (loading) {
		return <div>Loading ...</div>;
	}

	if (error) {
		return <div>Something went wrong!</div>;
	}
	return (
		<div>
			<Select value={code} onValueChange={(value) => setCode(value)}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a country" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="usa">Usa</SelectItem>
						<SelectItem value="ind">India</SelectItem>
						<SelectItem value="pak">Pakistan</SelectItem>
						<SelectItem value="su">Saudia Arabi</SelectItem>
						<SelectItem value="qa">Qatar</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<div>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	);
};

export default CountryInfo;
