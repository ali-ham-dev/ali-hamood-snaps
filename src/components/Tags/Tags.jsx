import tags from '../../data/tags.json';
import './Tags.scss';
import Tag from '../Tag/Tag';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function Tags({filterDisplayed, updateFilterTags}) {
    return (
        <section className={`tags ${filterDisplayed?'':'tags--display'}`}>
            <h2 className="tags__title">Filters</h2>
            <div className="tags__tags">
                {
                    tags.map((tag)=>{
                        return (<Tag 
                            text={ tag } 
                            clickable={ true } 
                            marginRight={ true }
                            marginBottom={ true }
                            key={ tag }
                            updateFilterTags={ updateFilterTags }/>);
                    })
                }
            </div>
        </section>
    );
}

export default Tags;