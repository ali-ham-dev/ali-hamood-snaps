import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Logo from '../Logo/Logo';
import './Header.scss';
import React from 'react';

function Header({filterDisplayed, updateFilterDisplayed}) {
    return (
        <header className="header">
            <Logo />
            <Filter filterDisplayed={filterDisplayed} updateFilterDisplayed={updateFilterDisplayed}/>
        </header>
    );
}

export default Header;