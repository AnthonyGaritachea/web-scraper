import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='nav-container'>
            <Link to='/' className='home-link'>Home</Link>
            <Link to='/favorites' className='favorites-link'>Favorites</Link>
        </div>
    )
};

export default NavBar