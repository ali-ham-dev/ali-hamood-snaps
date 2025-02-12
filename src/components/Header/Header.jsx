import { NavLink } from 'react-router-dom';
import FilterSvg from '../../assets/icons/Filter.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="site-logo">
                <NavLink className="site-logo__link" to="/">Snaps</NavLink>
            </h1>
            <button className="filter">
                <label className="filter__text">Filter</label>
                <div className="filter__icon-container">
                    <img className="filter__icon" src={ FilterSvg } alt="Filter icon."></img>
                </div>
            </button>
        </header>
    );
}

export default Header;