import Kelvin from "./kelvin";
import Farenheit from "./farenheit";
import InputComponent from "./input";
import Banner from "./banner";
import AuthFlow from "./auth-flow";

function Keep() {
	return (
		<div className="max-w-md space-y-10">
			<InputComponent>
				{(value) => (
					<div>
						<Kelvin value={value} />
						<Farenheit value={value} />
					</div>
				)}
			</InputComponent>

			<AuthFlow banner={(title) => <Banner title={title} />} />
		</div>
	);
}

export default Keep;
