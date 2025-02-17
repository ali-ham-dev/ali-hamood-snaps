import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Filter />
        </header>
    );
}

export default Header;