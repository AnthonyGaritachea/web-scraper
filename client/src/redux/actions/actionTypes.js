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
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD_TO_FAVORITES',
                payload: story
            })
        }, 1000)
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