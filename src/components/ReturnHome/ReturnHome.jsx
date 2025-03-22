import './ReturnHome.scss';
import Arrow from '../../assets/icons/Arrow.svg';
import { useNavigate} from 'react-router-dom';

function ReturnHome({onHomePage}) {
    const navigate = useNavigate();

    const handelReturnHomeClick = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <button className={`return-home ${onHomePage ? 'return-home--hide' : ''}`}
            onClick={handelReturnHomeClick}>
            <img className="return-home__icon" src={Arrow} alt="Return to home page icon."></img>
            <label className="return-home__text">Home</label>
        </button>
    )
}

export default ReturnHome;