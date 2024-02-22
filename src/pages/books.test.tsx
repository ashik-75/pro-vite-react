import {
	render,
	screen,
	// waitForElementToBeRemoved,
} from "@testing-library/react";
import Books from "./books";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/server";
import { HttpResponse, http } from "msw";

describe("#books", () => {
	test("render the element", () => {
		render(<Books />);
	});

	test("show the button", async () => {
		render(<Books />);

		const buttonEl = screen.getByRole("button", {
			name: /Show the mango/i,
		});

		expect(buttonEl).toBeInTheDocument();
		await userEvent.click(buttonEl);
		// await waitForElementToBeRemoved(() => screen.getAllByText(/loading/i));
		// screen.debug();
		const listEl = await screen.findAllByRole("listitem");
		expect(listEl).toHaveLength(3);
	});

	test("check the error case also", async () => {
		server.use(
			http.get("https://jsonplaceholder.typicode.com/posts", () => {
				return new HttpResponse(null, { status: 500 });
			})
		);
		render(<Books />);

		const buttonEl = screen.getByRole("button", {
			name: /Show the mango/i,
		});

		expect(buttonEl).toBeInTheDocument();
		await userEvent.click(buttonEl);

		screen.debug();

		const error = await screen.findByText(/something/i);

		expect(error).toBeInTheDocument();
	});
});
