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

export const deleteStory = story => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'DELETE_STORY',
                payload: story
            })
        }, 1000)
    };
};