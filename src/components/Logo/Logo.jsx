import './Logo.css';
import { NavLink } from 'react-router-dom';

function Logo({ style }) {
    return (
        <h2 className="site-logo" style={ style }>
            <NavLink className="site-logo__link" to="/">Snaps</NavLink>
        </h2>
    );
}

export default Logo;