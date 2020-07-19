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