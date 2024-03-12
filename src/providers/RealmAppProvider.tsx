import { createRealmApp } from "@/lib/realm";
import { createContext, useEffect, useState } from "react";

type RealmAppProviderProps = {
	children: React.ReactNode;
};

export const RealmAppContext = createContext<{
	realmApp: Realm.App<
		globalThis.Realm.DefaultFunctionsFactory &
			globalThis.Realm.BaseFunctionsFactory,
		SimpleObject
	>;
}>({});

const RealmAppProvider = ({ children }: RealmAppProviderProps) => {
	const [realmApp, setRealmApp] = useState(() => createRealmApp());

	useEffect(() => {
		if (!realmApp) {
			setRealmApp(createRealmApp());
		}
	}, [realmApp]);

	return (
		<RealmAppContext.Provider value={{ realmApp }}>
			{children}
		</RealmAppContext.Provider>
	);
};

export default RealmAppProvider;
