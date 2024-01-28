const Banner = ({ title }: { title: string }) => {
	return (
		<div className="p-10 bg-teal-600 rounded-3xl">
			<h1>Hola, {title}</h1>
		</div>
	);
};

export default Banner;
