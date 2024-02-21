import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("#Homepgae", () => {
	test("Check the component is rendered or not", async () => {
		render(<Home />);
		const value = screen.getByRole("heading", { name: /value/i });
		expect(value.textContent).toBe("value: 2");

		const incrementButton = screen.getByRole("button", {
			name: /increment/i,
		});
		await userEvent.click(incrementButton);

		expect(value.textContent).toBe("value: 3");

		const decrementButton = screen.getByRole("button", {
			name: /decrement/i,
		});

		await userEvent.click(decrementButton);
		expect(value.textContent).toBe(`value: 2`);

		const resetButton = screen.getByRole("button", {
			name: /reset/i,
		});

		await userEvent.click(resetButton);

		expect(value.textContent).toBe("value: 0");
	});
});
