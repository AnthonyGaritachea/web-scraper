import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../styles.css';

import DisplayArticles from './DisplayArticles.jsx';
import Favorites from './Favorites.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' component={DisplayArticles} exact />
                <Route path='/favorites' component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;