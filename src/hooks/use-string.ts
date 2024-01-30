export const useString = (
	object: { [key: string]: string | undefined | null | number },
	{ isSkipEmpty, isSkipNull }: { isSkipEmpty: boolean; isSkipNull: boolean }
) => {
	const searchParams = new URLSearchParams();
	for (const [key, value] of Object.entries(object)) {
		if (isSkipEmpty && isSkipNull) {
			if (value) {
				searchParams.append(key, String(value));
			}
		} else if (isSkipEmpty) {
			if (value !== "") {
				searchParams.append(key, String(value));
			}
		} else if (isSkipNull) {
			if (value !== null) {
				searchParams.append(key, String(value));
			}
		} else {
			searchParams.append(key, String(value));
		}
	}

	return searchParams.toString();
};
