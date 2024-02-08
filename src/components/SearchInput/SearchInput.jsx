import { useState } from 'react';
import { FaCopy, FaSearch } from 'react-icons/fa';
import { ClipBoard } from '../../helpers/clipboard';
import cls from './SearchInput.module.css';

function SearchInput({ setData, setIsLoading }) {
	const [query, setQuery] = useState('');

	const handleInput = (e) => {
		setQuery(e.target.value);
	};

	const handleCopyClipBoard = (query) => {
		ClipBoard('search', query);
	};

	const fetchData = async (e, query) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
			const data = await response.json();
			setIsLoading(false);
			setData(data.items);
		} catch (error) {
			console.error('Error fetching repositories:', error);
		}
	};
	return (
		<form className={cls['form']} onSubmit={(e) => fetchData(e, query)}>
			<button className={cls['form__button']}>
				<FaSearch className={cls['input-filed__search']} />
			</button>
			<div className={cls['form__input-field']}>
				<input
					type="text"
					name="search"
					id="search"
					className={cls['input-field__search']}
					value={query ?? ''}
					onChange={handleInput}
				/>
				{query.length > 0 && (
					<FaCopy className={cls['input-filed__copy']} onClick={() => handleCopyClipBoard(query)} />
				)}
			</div>
		</form>
	);
}

export default SearchInput;
