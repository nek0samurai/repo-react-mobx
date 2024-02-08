import { observer } from 'mobx-react-lite';
import favoriteStore from '../../store';
import { useState, useEffect } from 'react';
import UserItem from '../UserItem/UserItem';
import cls from './Favorites.module.css';

const Favorites = observer(() => {
	const [repo, setRepo] = useState([]);
	const favorite = favoriteStore.favorites;

	const isFavoriteComponent = true;

	useEffect(() => {
		setRepo(favorite);
	}, [favorite]);

	return (
		<aside className={cls['favorites']}>
			<h2>Favorites</h2>
			<ul className={cls['favorites__list']}>
				{repo.map((user) => (
					<UserItem user={user} key={user.node_id} isFavoriteComponent={isFavoriteComponent} />
				))}
			</ul>
		</aside>
	);
});

export default Favorites;
