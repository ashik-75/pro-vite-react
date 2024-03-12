import { RealmAppContext } from "@/providers/RealmAppProvider";
import { useContext } from "react";

const useRealmApp = () => {
	const realmApp = useContext(RealmAppContext);

	if (!realmApp) {
		throw new Error("Something went wrong!");
	}
	return realmApp;
};

export default useRealmApp;
