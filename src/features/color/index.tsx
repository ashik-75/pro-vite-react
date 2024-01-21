import { useState } from "react";
import { RGBTORYB, objToRgb, ryb2rgb } from "./converter";
import { ImageColorPicker } from "react-image-color-picker";
import imageSrc from "../../../public/ai-1.jpg";
import { cn } from "@/lib/utils";

const Color = () => {
	const [selected, setSelected] = useState(1);
	const [color1, setColor1] = useState<string>("");
	const [color2, setColor2] = useState("");

	const handleColorPick = (color: string) => {
		if (selected === 1) {
			setColor1(color);
		}

		if (selected === 2) {
			setColor2(color);
		}
	};

	const finalRYB = () => {
		const r = Math.abs(RGBTORYB(color1).r - RGBTORYB(color2).r);
		const y = Math.abs(RGBTORYB(color1).y - RGBTORYB(color2).y);
		const b = Math.abs(RGBTORYB(color1).b - RGBTORYB(color2).b);
		return {
			r,
			y,
			b,
		};
	};

	return (
		<div className="max-w-2xl mx-auto pt-10">
			<ImageColorPicker
				onColorPick={handleColorPick}
				imgSrc={imageSrc}
				zoom={1}
			/>

			<br />

			<div className="grid gap-5 grid-cols-1 md:grid-cols-3">
				<div>
					<div
						onClick={() => setSelected(1)}
						style={{ padding: "20px", background: color1, width: "200px" }}
						className={cn(
							"border rounded-md cursor-pointer",
							selected === 1 && "border-2 border-zinc-600"
						)}
					>
						Pick First color
					</div>

					{color1 && (
						<div>
							<div className="flex gap-5">
								RGB: <div>{color1}</div>
							</div>
							<div className="">
								<div className="flex gap-2">
									RYB: <pre></pre> {JSON.stringify(RGBTORYB(color1))}
								</div>
								<br />
								<div>
									<div>RYB in %</div>

									<ul>
										<li>R: {Math.round((RGBTORYB(color1).r / 255) * 100)}%</li>
										<li>Y: {Math.round((RGBTORYB(color1).y / 255) * 100)}%</li>
										<li>B: {Math.round((RGBTORYB(color1).b / 255) * 100)}%</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>

				<div>
					<div
						onClick={() => setSelected(2)}
						style={{ padding: "20px", background: color2, width: "200px" }}
						className={cn(
							"border rounded-md cursor-pointer",
							selected === 2 && "border-2 border-zinc-600 border-spacing-2"
						)}
					>
						Pick Second color
					</div>

					{color2 && (
						<div>
							<div className="flex gap-5">
								RGB: <div>{color2}</div>
							</div>
							<div className="">
								<div className="flex gap-2">
									RYB: <pre></pre> {JSON.stringify(RGBTORYB(color2))}
								</div>
								<br />

								<div>
									<div>RYB in %</div>

									<ul>
										<li>R: {Math.round((RGBTORYB(color2).r / 255) * 100)}%</li>
										<li>Y: {Math.round((RGBTORYB(color2).y / 255) * 100)}%</li>
										<li>B: {Math.round((RGBTORYB(color2).b / 255) * 100)}%</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
				<div>
					<div
						style={{
							padding: "20px",
							width: "200px",
						}}
						className={cn("border rounded-md font-medium")}
					>
						Final Color
					</div>

					{color1 && color2 && (
						<div>
							<div className="flex gap-5">
								RGB:{" "}
								<div>
									{JSON.stringify(
										objToRgb(ryb2rgb(finalRYB().r, finalRYB().y, finalRYB().b))
									)}
								</div>
							</div>
							<div className="">
								<div>RYB: {JSON.stringify(finalRYB())}</div>
								<br />
								<div>
									<div>RYB in %</div>

									<ul>
										<li>R: {Math.round((finalRYB().r / 255) * 100)}%</li>
										<li>Y: {Math.round((finalRYB().y / 255) * 100)}%</li>
										<li>B: {Math.round((finalRYB().b / 255) * 100)}%</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Color;
