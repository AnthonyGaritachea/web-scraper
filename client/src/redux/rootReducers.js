import { combineReducers } from 'redux';

import fetchNewsReducer from './reducers/fetchNewsReducer.js';
import favoritesReducer from './reducers/favoritesReducer.js';

const rootReducers = combineReducers({
    scrapedNews: fetchNewsReducer,
    favoriteStories: favoritesReducer
});

export default rootReducers;