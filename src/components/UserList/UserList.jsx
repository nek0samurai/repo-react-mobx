import UserItem from '../UserItem/UserItem';
import cls from './UserList.module.css';

function UserList({ data }) {
	return (
		<div className={cls['users']}>
			<h2>Repositories</h2>
			<ul className={cls['user__list']}>
				{data.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
}

export default UserList;
