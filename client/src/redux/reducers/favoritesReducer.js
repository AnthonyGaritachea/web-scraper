const initialState = [];

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            return [...state, action.payload];
        case 'DELETE_STORY':
            const story = action.payload;
            return state.filter(newsStory => newsStory._id !== story._id);
            default: 
                return state;
    };
};

export default favoritesReducer;