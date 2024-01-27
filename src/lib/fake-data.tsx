import { faker } from "@faker-js/faker";
import { format } from "date-fns";

// Function to generate fake data
const generateFakeData = () => {
	// Generate person's name
	const name = faker.person.fullName();

	// Generate monthly and yearly expenses
	const income = faker.number.int({ max: 5000 });
	const expense = faker.number.int({ max: 5000 });

	// Generate a fake date
	const date = faker.date.past();

	return {
		name,
		income,
		expense,
		date,
	};
};

// Generate an array of 100 fake data entries
const moneFlows = Array.from({ length: 20 }, () => generateFakeData())
	.slice()
	.sort((a, b) => a.date.getTime() - b.date.getTime());

const growthFnc = () => {
	const rate = faker.number.float({ min: 0, max: 9 });
	const year = faker.date.past({ years: 10 });

	return { year, rate };
};

const growthData = Array.from({ length: 20 }, () => growthFnc()).map(
	(item) => ({ ...item, year: format(item.year, "yyyy") })
);

export { moneFlows, growthData };
