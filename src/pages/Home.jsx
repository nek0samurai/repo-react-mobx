import { useState } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import UserList from '../components/UserList/UserList';
import Favorites from '../components/Favorites/Favorites';
import Loading from '../components/Loading/Loading';

function Home({ data, setData }) {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<>
			<header className="header">
				<h1 className="header__title">Searching for repositories </h1>
				<SearchInput
					data={data}
					setData={setData}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
			</header>

			<main className="main">
				{isLoading && <Loading />}
				{data.length > 0 && !isLoading && <UserList data={data} />}
				<Favorites data={data} />
			</main>
		</>
	);
}

export default Home;
