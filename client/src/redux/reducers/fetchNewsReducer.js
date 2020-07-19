const initialState = {
    news: [],
    favorites: []
};

const fetchNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_NEWS':
            return {
                ...state,
                news: [
                        ...action.payload
                ]
            }
            default: return state
    };
};

export default fetchNewsReducer;