import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import  thunk from 'redux-thunk';

import App from './components/App.jsx';
import rootReducers from './redux/rootReducers.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['scrapedNews', 'favoriteStories']
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);