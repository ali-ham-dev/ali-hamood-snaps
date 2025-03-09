import React from 'react';
import { useEffect } from 'react';
import './FourZeroFour.scss';

function FourZeroFour({ setOnHomePage }) {
    useEffect(() => {
        setOnHomePage(false);
    }, []);
    
    return (
        <main className="four-zero-four">
            <div className="four-zero-four__container">
                <h1 className="four-zero-four__title">404</h1>
                <p className="four-zero-four__description">
                    The page you are looking for does not exist.
                </p>
            </div>
        </main>
    );
}

export default FourZeroFour;