import UploadImage from "./image";
import { useState, useCallback } from "react";
import useEyeDropper from "use-eye-dropper";
import { hexToRGB, hexToRYB } from "./converter";

const Color = () => {
	const [image, setImage] = useState<File | null>();
	const { open, isSupported } = useEyeDropper();
	const [color, setColor] = useState<string>("");

	const pickColor = useCallback(() => {
		// Using async/await (can be used as a promise as-well)
		const openPicker = async () => {
			try {
				const color = await open();
				setColor(color.sRGBHex);
			} catch (e) {
				console.log(e);
				// Ensures component is still mounted
				// before calling setState
			}
		};
		openPicker();
	}, [open]);

	return (
		<div className="max-w-2xl mx-auto pt-10">
			<UploadImage image={image} setImage={setImage} />

			{color && (
				<>
					<div style={{ padding: "20px", background: color }}>
						Selected color
					</div>
				</>
			)}

			<div className="my-5">
				{image ? (
					<button className="px-5 py-2 rounded-3xl border " onClick={pickColor}>
						Pick color
					</button>
				) : (
					<span>Pick Image first</span>
				)}
			</div>

			<div>{!isSupported() && <p>Eye dropper api not supported</p>}</div>

			{color && (
				<div>
					<div className="flex gap-5">
						HEX: <pre>{color}</pre>{" "}
					</div>
					<div className="flex gap-5">
						RGB: <pre></pre> {JSON.stringify(hexToRGB(color))}
					</div>
					<div className="">
						<div>
							RYB: <pre></pre> {JSON.stringify(hexToRYB(color))}
						</div>
						<br />
						<div>
							<div>RYB in %</div>

							<ul>
								<li>R: {Math.round((hexToRYB(color).r / 255) * 100)}%</li>
								<li>Y: {Math.round((hexToRYB(color).y / 255) * 100)}%</li>
								<li>B: {Math.round((hexToRYB(color).b / 255) * 100)}%</li>
							</ul>
						</div>
					</div>

					{/* <div
						style={{
							padding: "20px",
							background: `rgb(${hexToRYB(color).r},${hexToRYB(color).y},${
								hexToRYB(color).b
							})`,
						}}
					>
						Modified Color
					</div> */}
				</div>
			)}
		</div>
	);
};

export default Color;
