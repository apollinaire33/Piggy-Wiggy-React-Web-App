import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles/navbar.css'

const Navbar = (props) => {

    return (
        
        <header>
            <h1 className="label">Piggy-Wiggy</h1>
            <img src="https://chpic.su/_data/stickers/m/magazin4ik_bo/magazin4ik_bo_030.webp" />
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/login'>Login</NavLink>
                <NavLink exact to='/register'>Register</NavLink>
            </nav>
        </header>

    );

};

export default Navbar;