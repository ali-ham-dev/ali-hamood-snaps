import { useState } from 'react';
import './Filter.css';
import FilterSvg from '../../assets/icons/Filter.svg';
import FilterSvgHover from '../../assets/icons/FilterHover.svg';

function Filter() {
    const [filterIcon, setFilterIcon] = useState(FilterSvg);

    return (
        <button className="filter"
            onMouseEnter={ ()=>{setFilterIcon(FilterSvgHover)} }
            onMouseLeave={ ()=>{setFilterIcon(FilterSvg)} }>
            <label className="filter__text">Filters</label>
            <img className="filter__icon" src={ filterIcon } alt="Filter icon."></img>
        </button>
    );
}

export default Filter;