import React from 'react';
import './ImagePage.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiData from '../../data/apiData.json';
import axios from 'axios';
import LargeImageCard from '../../components/LargeImageCard/LargeImageCard';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comment from '../../components/Comment/Comment';

function ImagePage({ setOnHomePage }) {
    const params = useParams();
    const [image, setImage] = useState({});

    useEffect(() => {
        setOnHomePage(false);
    }, []);

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(`
                    ${apiData.api_url}photos/${params.imageId}/${apiData.api_key}`);
                
                setImage(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getImage();
    }, []);

    return (
        <main className="image-page">
            <div className="image-page__container">
                <LargeImageCard 
                    imageSrc={image.photo} 
                    imageAltText={image.photoDescription} 
                    author={image.photographer} 
                    tags={image.tags} />
                <CommentForm />
            </div>
        </main>
    );
}

export default ImagePage;