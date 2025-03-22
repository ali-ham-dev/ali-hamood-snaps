import './ImagePage.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiData from '../../data/apiData.json';
import axios from 'axios';
import LargeImageCard from '../../components/LargeImageCard/LargeImageCard';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comment from '../../components/Comment/Comment';
import { v4 as uuidv4 } from 'uuid';   

function ImagePage({ setOnHomePage }) {
    const params = useParams();
    const [image, setImage] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setOnHomePage(false);

        const getImage = async () => {
            try {
                const response = await axios.get(`
                    ${apiData.api_url}photos/${params.imageId}/${apiData.api_key}`);
                
                setImage(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        const getComments = async () => {
            axios
                .get(`${apiData.api_url}photos/${params.imageId}/comments/${apiData.api_key}`)
                .then((response) => {
                    setComments(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getImage();
        getComments();
    }, []);

    return (
        <main className="image-page">
            <div className="image-page__container">
                <LargeImageCard image={image} />
                <CommentForm comments={comments} 
                    setComments={setComments} 
                    photoId={params.imageId}/>
                <h2 className="image-page__comments-title">
                    {comments.length} Comment{comments.length === 1 ? '' : 's'}
                </h2>
                { 
                    comments
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map((comment) => {
                        return (
                            <Comment comment={comment} key={comment.id ? comment.id : uuidv4()} />
                        ) 
                    })
                }
            </div>
        </main>
    );
}

export default ImagePage;