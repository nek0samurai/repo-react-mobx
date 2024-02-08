import { Link } from 'react-router-dom';
import favoriteStore from '../../store';
import { observer } from 'mobx-react-lite';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import cls from './UserItem.module.css';

const UserItem = observer(({ user, isFavoriteComponent }) => {
	const { id, forks_count, description, full_name, owner, name, stargazers_count } = user;

	const handleAddToFavorite = () => {
		favoriteStore.addToFavorites(user);
	};
	const isFavorite = favoriteStore.isFavorite(user);

	return (
		<li className={cls['user__block']} key={id}>
			<div className={cls['user__block-body']}>
				<div className={cls['user__block-header']}>
					<img src={owner.avatar_url} alt="" className={cls['user__block-header-ava']} />
					<div className={cls['user__block-header-info']}>
						<Link className={cls['user__block-header__link']} to={`/repo/${id}`}>
							{full_name}
						</Link>
						<p>{name}</p>
					</div>
				</div>
				<div className={cls['user__block-info']}>
					<p>{description}</p>
					<div className={cls['user__block-nums']}>
						<span>
							<FaCodeFork />
							{forks_count}
						</span>
						<span>
							<FaStar />
							{stargazers_count}
						</span>
					</div>
				</div>
			</div>
			{!isFavoriteComponent && (
				<div
					onClick={handleAddToFavorite}
					className={`
				${cls.user__block_like}
				${isFavorite ? cls.liked : ''}
				`}>
					<FaHeart className={cls['user__block-icon']} />
				</div>
			)}
		</li>
	);
});

export default UserItem;
