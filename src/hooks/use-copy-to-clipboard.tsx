import React from "react";
import toast from "react-hot-toast";

const oldSchoolCopy = (text: string) => {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = text;
	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);
};

const useCopyToClipboard = (): [string | null, (value: string) => void] => {
	const [state, setState] = React.useState<string | null>(null);
	const copyToClipboard = React.useCallback((value: string) => {
		const handleCopy = async () => {
			try {
				await navigator.clipboard.writeText(value);
				setState(value);
				toast.success("Copied");
			} catch (error) {
				oldSchoolCopy(value);
				setState(value);
				toast.error("Failed");
			}
			setTimeout(() => {
				setState(null); // Reset state after 5 seconds
			}, 5000);
		};

		handleCopy();
	}, []);
	return [state, copyToClipboard];
};

export default useCopyToClipboard;
