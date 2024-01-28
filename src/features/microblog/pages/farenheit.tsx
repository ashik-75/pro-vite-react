const Farenheit = ({ value }: { value: string }) => {
	return <div>{((parseInt(value) || 0) * 9) / 5 + 32}°F</div>;
};

export default Farenheit;
