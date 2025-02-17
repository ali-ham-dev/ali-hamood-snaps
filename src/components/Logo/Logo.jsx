import "./Logo.css";
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <h2 className="site-logo">
            <NavLink className="site-logo__link" to="/">Snaps</NavLink>
        </h2>
    );
}

export default Logo;