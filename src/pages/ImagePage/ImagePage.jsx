import React from 'react';
import { useEffect } from 'react';
import './ImagePage.scss';
import { useParams } from 'react-router-dom';

function ImagePage({ setOnHomePage }) {
    useEffect(() => {
        setOnHomePage(false);
    }, []);

    const params = useParams();

    return (
        <main className="image-page">
            <div className="">
                <h1>Image Page: {params.imageId}</h1>
            </div>
        </main>
    );
}

export default ImagePage;