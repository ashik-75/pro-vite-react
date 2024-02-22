import { render, screen } from "@testing-library/react";
import { describe, test, vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./login";
import { faker } from "@faker-js/faker";

function generateLoginInfo() {
	return {
		u: faker.internet.userName(),
		p: faker.internet.password(),
	};
}

describe("#Login", () => {
	test("render component", () => {
		render(<Login fn={vitest.fn()} />);
	});

	test("test input field", async () => {
		const handleSubmit = vitest.fn();
		render(<Login fn={handleSubmit} />);

		// screen.debug();
		const { u, p } = generateLoginInfo();

		const username = screen.getByPlaceholderText(/username/i);
		const password = screen.getByPlaceholderText(/password/i);

		await userEvent.type(username, u);
		await userEvent.type(password, p);
		await userEvent.click(screen.getByRole("button", { name: /login/i }));
		screen.debug();

		expect(handleSubmit).toHaveBeenCalledWith({
			username: u,
			password: p,
		});
		expect(handleSubmit).toHaveBeenCalledTimes(1);

		// expect(username.textContent).toHaveDisplayValue("Fuck");
	});

	test("test mock request", async () => {
		render(<Login fn={vitest.fn()} />);

		await userEvent.type(screen.getByPlaceholderText(/username/i), "alex");
		await userEvent.type(screen.getByPlaceholderText(/password/i), "test");
		await userEvent.click(
			screen.getByRole("button", {
				name: /login/i,
			})
		);

		// await waitForElementToBeRemoved(() => screen.getByText(/spinner/i));

		const output = screen.getByLabelText(/bret/i);

		expect(output).toBeInTheDocument();
	});
});
