import "./Filter.css";
import FilterSvg from '../../assets/icons/Filter.svg';

function Filter() {
    return (
        <button className="filter">
            <label className="filter__text">Filters</label>
            <img className="filter__icon" src={ FilterSvg } alt="Filter icon."></img>
        </button>
    );
}

export default Filter;