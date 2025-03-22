import { useState } from 'react';
import './Filter.scss';
import FilterSvg from '../../assets/icons/Filter.svg?react';

function Filter({filterDisplayed, updateFilterDisplayed, onHomePage}) {
    const [filterHover, setFilterHover] = useState(false);
    
    const filterClick = ()=>{
        updateFilterDisplayed(!filterDisplayed);
    };

    const filterMouseEnter = ()=>{
        if (!filterDisplayed) {
            setFilterHover(true);
        }
    }

    const filterMouseLeave = ()=>{
        if (!filterDisplayed) {
            setFilterHover(false);
        }
    }

    return (
        <button className={ `filter ${filterHover ? "filter--hover" : ""}
                ${onHomePage ? "" : "filter--hide"}` }
            onMouseEnter={ filterMouseEnter }
            onMouseLeave={ filterMouseLeave }
            onClick={ filterClick }>
            <label className="filter__text">Filters</label>
            <FilterSvg className={`filter__icon ${filterHover ? "filter--icon-hover" : ""}`} />
        </button>
    );
}

export default Filter;