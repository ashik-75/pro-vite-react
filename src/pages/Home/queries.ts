export type IMarket = {
	name: string;
	_id: string;
	old: string;
	region: string;
};

export const getMarkets = async (
	app: Realm.App<
		Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
		SimpleObject
	>
): Promise<IMarket[]> => {
	const query = app.currentUser
		?.mongoClient("mongodb-atlas")
		.db("freelance")
		.collection("marketplace");

	return (await query?.find({})) as IMarket[];
};

export const addMarkets = async (
	app: Realm.App<
		Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
		SimpleObject
	>,
	data: Partial<IMarket>
): Promise<IMarket> => {
	const query = app.currentUser
		?.mongoClient("mongodb-atlas")
		.db("freelance")
		.collection("marketplace");

	return query?.insertOne(data);
};
