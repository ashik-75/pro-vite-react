import React from "react";

const UploadImage = ({
	setImage,
	image,
}: {
	image: File | null | undefined;
	setImage: React.Dispatch<React.SetStateAction<File | null | undefined>>;
}) => {
	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		setImage(file!);
	};

	return (
		<form>
			<input
				type="file"
				accept="image/*"
				className="block"
				onChange={handleImageChange}
				// value={image}
			/>
			<br />
			{image && (
				<>
					<img
						className="rounded-3xl mb-5"
						src={URL.createObjectURL(image)}
						alt="Selected Image"
					/>
				</>
			)}
		</form>
	);
};

export default UploadImage;
