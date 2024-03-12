import * as Realm from "realm-web";

// const baseUrl = "https://realm.mongodb.com";
const id = "application-0-lqwds";

export function createRealmApp(): Realm.App<
	globalThis.Realm.DefaultFunctionsFactory &
		globalThis.Realm.BaseFunctionsFactory,
	SimpleObject
> {
	const app = new Realm.App({ id });

	return app;
}
