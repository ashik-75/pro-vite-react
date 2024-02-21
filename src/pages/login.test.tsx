import { render, screen } from "@testing-library/react";
import { describe, test, vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./login";

describe("#Login", () => {
	test("render component", () => {
		render(<Login fn={vitest.fn()} />);
	});

	test("test input field", async () => {
		const handleSubmit = vitest.fn();
		render(<Login fn={handleSubmit} />);

		// screen.debug();

		const u = "FFF";
		const p = "testing321";

		const username = screen.getByPlaceholderText(/username/i);
		const password = screen.getByPlaceholderText(/password/i);

		await userEvent.type(username, u);
		await userEvent.type(password, p);
		await userEvent.click(screen.getByRole("button", { name: /login/i }));
		expect(handleSubmit).toHaveBeenCalledWith({
			username: u,
			password: p,
		});
		console.log(username.textContent);
		// expect(username.textContent).toHaveDisplayValue("Fuck");
	});
});
