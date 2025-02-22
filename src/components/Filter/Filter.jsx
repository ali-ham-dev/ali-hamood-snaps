import { useState } from 'react';
import './Filter.css';
import FilterSvg from '../../assets/icons/Filter.svg';
import FilterSvgHover from '../../assets/icons/FilterHover.svg';

function Filter() {
    let filterClicked = false;
    const [filterIcon, setFilterIcon] = useState(FilterSvg);
    const [filterHover, setFilterHover] = useState(false);
    
    const filterClick = () => {
        filterClicked = !filterClicked;
        
        if (filterClicked) {
            setFilterIcon(FilterSvgHover)
        } else {
            setFilterIcon(FilterSvg)
        }
    };

    const filterMouseEnter = () => {
        if (!filterClicked) {
            setFilterHover(true);
            setFilterIcon(FilterSvgHover);
        }
    }

    const filterMouseLeave = () => {
        if (!filterClicked) {
            setFilterHover(false);
            setFilterIcon(FilterSvg);
        }
    }

    return (
        <button className={ `filter ${filterHover ? "filter--hover" : ""}` }
            onMouseEnter={ filterMouseEnter }
            onMouseLeave={ filterMouseLeave }
            onClick={ filterClick }>
            <label className="filter__text">Filters</label>
            <img className="filter__icon" src={ filterIcon } alt="Filter icon."></img>
        </button>
    );
}

export default Filter;