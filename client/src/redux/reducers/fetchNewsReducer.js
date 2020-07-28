const initialState = {
    news: [],
};

const fetchNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_NEWS':
            return {
                ...state,
                news: [...action.payload]
            };
        case 'DELETE_STORY':
            const story = action.payload;
            return {
                ...state,
                news: state.news.filter(newsStory => newsStory._id !== story._id)
            }
            default: return state
    };
};

export default fetchNewsReducer;