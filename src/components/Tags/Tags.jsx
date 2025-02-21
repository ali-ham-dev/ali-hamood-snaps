import tags from '../../data/tags.json';
import './Tags.css';
import Tag from '../Tag/Tag';

function Tags() {

    return (
        <section className="tags">
            <h2 className="tags__title">Filters</h2>
            <div className="tags__tags">
                {
                    tags.map((tag)=>{
                        return (<Tag 
                            text={ tag } 
                            clickable={ true } 
                            marginRight={ true }
                            marginBottom={ true }/>);
                    })
                }
            </div>
        </section>
    );
}

export default Tags;