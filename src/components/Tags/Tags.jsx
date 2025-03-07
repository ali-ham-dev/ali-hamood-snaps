import React from 'react';
import './Tags.scss';
import Tag from '../Tag/Tag';
import apiData from '../../data/apiData.json';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Tags({filterDisplayed, updateFilterTags}) {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const getTags = async () => {
            try {
                const response = await axios.get(`
                    ${apiData.api_url}tags/${apiData.api_key}`);
                
                setTags(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getTags();
    }, []);

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