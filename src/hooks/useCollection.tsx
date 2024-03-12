import useRealmApp from "./useRealmApp";

const useCollection = () => {
	const { realmApp } = useRealmApp();

	const collection = realmApp.currentUser
		?.mongoClient("mongodb-atlas")
		.db("test")
		.collection("store");

	return collection;
};

export default useCollection;
