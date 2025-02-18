import './Logo.css';
import { NavLink } from 'react-router-dom';

function Logo(props) {
    const propClassName = props.className ? props.className : '';

    return (
        <h2 className={`site-logo ${propClassName}`}>
            <NavLink className="site-logo__link" to="/">Snaps</NavLink>
        </h2>
    );
}

export default Logo;