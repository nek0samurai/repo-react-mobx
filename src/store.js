// FavoriteStore.js
import { makeAutoObservable } from 'mobx';

class FavoriteStore {
	favorites = [];

	constructor() {
		makeAutoObservable(this);
	}

	addToFavorites(repo) {
		if (!this.isFavorite(repo)) {
			this.favorites.push(repo);
		} else {
			this.removeFromFavorites(repo);
		}
	}

	removeFromFavorites(repo) {
		this.favorites = this.favorites.filter((favRepo) => favRepo.id !== repo.id);
	}

	isFavorite(repo) {
		return this.favorites.some((favRepo) => favRepo.id === repo.id);
	}
}

const favoriteStore = new FavoriteStore();
export default favoriteStore;
