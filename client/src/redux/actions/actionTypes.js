import axios from 'axios';

export const fetchNews = () => {
    return async dispatch => {
        const { data } = await axios.get('/stories');
        dispatch({
            type: 'FETCH_NEWS',
            payload: data
        });
    };
};

export const addToFavorites = story => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload: story  
    };
};