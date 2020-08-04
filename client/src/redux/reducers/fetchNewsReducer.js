const initialState = {
    news: [],
};

const fetchNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_NEWS':
        const payloadData = [...state.news, ...action.payload];
        const uniqueStories = payloadData.reduce((uniqueObjs, val) => {
            if(!uniqueObjs.some(obj => obj._id === val._id)) {
              uniqueObjs.push(val);
            }
            return uniqueObjs;
        },[]);
            return {
                ...state,
                news: uniqueStories
            };
        case 'DELETE_STORY':
            const story = action.payload;
            if(window.location.pathname === '/'){
                return {
                    ...state,
                    news: state.news.filter(newsStory => newsStory._id !== story._id)
                }
            };
        case 'ADD_TO_FAVORITES': 
        const storyObj = action.payload;
            return {
                ...state,
                news: state.news.filter(newsStory => newsStory._id !== storyObj._id)
            }
            default: return state
    };
};

export default fetchNewsReducer;