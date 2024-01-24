import { useGetUsersQuery } from "./user-slice";

const UserList = () => {
	const { data, isLoading, isError } = useGetUsersQuery();

	if (isLoading) {
		return <div>Loading</div>;
	}
	return (
		<div>
			<h1>user list</h1>

			<ul>
				{data?.map((user) => (
					<div key={user.username}>{user.username}</div>
				))}
			</ul>
		</div>
	);
};

export default UserList;
