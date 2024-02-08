import { useParams, Link } from 'react-router-dom';
import cls from './CurrentUserPage.module.css';

function CurrentUserPage({ data }) {
	const { id } = useParams();

	const user = data.find((item) => item.id.toString() === id);

	return (
		<>
			<Link to={'/'}>Back</Link>
			<h1>Repository Info</h1>
			<div className={cls.user}>
				<h2>{user.name}</h2>
				<p>{user.description}</p>
				<div className={cls.details}>
					<p>
						<strong>Language:</strong> {user.language}
					</p>
					<p>
						<strong>Stars:</strong> {user.stargazers_count}
					</p>
					<p>
						<strong>Watchers:</strong> {user.watchers_count}
					</p>
					<p>
						<strong>Forks:</strong> {user.forks_count}
					</p>
					<p>
						<strong>License:</strong> {user.license ? user.license.name : 'N/A'}
					</p>
					<p>
						<strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}
					</p>
					<p>
						<strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}
					</p>
					<p>
						<strong>URL:</strong>{' '}
						<a href={user.html_url} target="_blank" rel="noopener noreferrer">
							{user.html_url}
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default CurrentUserPage;
