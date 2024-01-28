const Kelvin = ({ value }: { value: string }) => {
	return <div>{(parseInt(value) || 0) + 273.15}k</div>;
};

export default Kelvin;
