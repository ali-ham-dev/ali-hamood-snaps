import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Logo from '../Logo/Logo';
import './Header.scss';
import React from 'react';
import ReturnHome from '../ReturnHome/ReturnHome';

function Header({ filterDisplayed, updateFilterDisplayed, onHomePage }) {
    return (
        <header className="header">
            <Logo />
            <Filter filterDisplayed={filterDisplayed} 
                updateFilterDisplayed={updateFilterDisplayed}
                onHomePage={onHomePage}/>
            <ReturnHome onHomePage={onHomePage}/>
        </header>
    );
}

export default Header;