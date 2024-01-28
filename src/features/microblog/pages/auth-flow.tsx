import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

const AuthFlow = ({ banner }: { banner: (info: string) => ReactNode }) => {
	return (
		<div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				laborum?
			</p>
			{banner("hi maliha")}

			<Button onClick={() => banner("hi maliha")}>Confetti</Button>
		</div>
	);
};

export default AuthFlow;
