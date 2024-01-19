export function hexToRGB(hex: string) {
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return { r, g, b };
}

export function hexToRYB(hex: string) {
	const { r, g, b } = hexToRGB(hex);
	return rgbToryb(r, g, b);
}

export function rgbToryb(iRed: number, iGreen: number, iBlue: number) {
	// Remove the white from the color
	const iWhite = Math.min(iRed, iGreen, iBlue);

	iRed -= iWhite;
	iGreen -= iWhite;
	iBlue -= iWhite;

	const iMaxGreen = Math.max(iRed, iGreen, iBlue);

	// Get the yellow out of the red+green

	let iYellow = Math.min(iRed, iGreen);

	iRed -= iYellow;
	iGreen -= iYellow;

	// If this unfortunate conversion combines blue and green, then cut each in half to
	// preserve the value's maximum range.
	if (iBlue > 0 && iGreen > 0) {
		iBlue /= 2;
		iGreen /= 2;
	}

	// Redistribute the remaining green.
	iYellow += iGreen;
	iBlue += iGreen;

	// Normalize to values.
	const iMaxYellow = Math.max(iRed, iYellow, iBlue);

	if (iMaxYellow > 0) {
		const iN = iMaxGreen / iMaxYellow;

		iRed *= iN;
		iYellow *= iN;
		iBlue *= iN;
	}

	// Add the white back in.
	iRed += iWhite;
	iYellow += iWhite;
	iBlue += iWhite;

	return { r: Math.trunc(iRed), y: Math.trunc(iYellow), b: Math.trunc(iBlue) };
}
