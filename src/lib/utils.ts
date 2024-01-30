import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function Await<T>({
	promise,
	children,
}: {
	promise: Promise<T>;
	children: (value: T) => JSX.Element;
}) {
	const data = await promise;

	return children(data);
}
