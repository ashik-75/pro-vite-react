import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import useDocumentTitle from "@/hooks/use-document-title";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
const Animation = () => {
	const [count, setCount] = useState(1);
	useDocumentTitle(`Animation props ${count}`);
	const [copyText, copyToClipBoard] = useCopyToClipboard();
	const randomId = crypto.randomUUID();

	return (
		<div>
			<button onClick={() => setCount((p) => p + 5)}>Press</button>
			<button
				className="border p-2 rounded-lg"
				onClick={() => {
					copyToClipBoard(`${randomId}`);
				}}
			>
				{copyText ? (
					<Check size={16} className="text-slate-400" />
				) : (
					<Copy size={16} className="text-slate-400" />
				)}
			</button>
		</div>
	);
};

export default Animation;
