import { combineReducers } from 'redux';

import fetchNewsReducer from './reducers/fetchNewsReducer.js';

const allReducers = combineReducers({
    scrapedNews: fetchNewsReducer
});

export default allReducers;