import './Tags.scss';
import Tag from '../Tag/Tag';
import apiData from '../../data/apiData.json';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Tags({filterDisplayed, updateFilterTags}) {
    const [tags, setTags] = useState([]);
    const [tagClickState, setTagClickState] = useState({});

    useEffect(() => {
        const getTags = async () => {
            try {
                const response = await axios.get(`
                    ${apiData.api_url}tags/${apiData.api_key}`);
                
                setTags(response.data);
                
                response.data.forEach( (tag) => {
                    tagClickState[tag] = false;
                });

            } catch (error) {
                console.log(error);
            }
        }

        getTags();
    }, []);

    const handelTagClickState = (tagText) => {
        const copyTagClickState = {...tagClickState};

        let currentSetTrue = '';
        for (let key in copyTagClickState) {
            if (copyTagClickState[key])
                currentSetTrue = key;

            copyTagClickState[key] = false;
        }
        
        if (currentSetTrue !== tagText)
            copyTagClickState[tagText] = !copyTagClickState[tagText];
        
        setTagClickState({...copyTagClickState});
    }

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
                            updateFilterTags={ updateFilterTags }
                            tagClickState={ tagClickState }
                            handelTagClickState={ handelTagClickState }/>);
                    })
                }
            </div>
        </section>
    );
}

export default Tags;