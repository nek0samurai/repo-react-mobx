import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import CurrentUserPage from './pages/CurrentUserPage/CurrentUserPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
	const [data, setData] = useState([]);

	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home data={data} setData={setData} />}></Route>
				<Route path="/repo/:id" element={<CurrentUserPage data={data} />}></Route>
			</Routes>
		</div>
	);
}
