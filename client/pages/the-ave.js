import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import TheAveBanner from '../components/TheAve/TheAveBanner/TheAveBanner';

const partners = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Navbar />
            <TheAveBanner />
            
        </div>
    );
};

export default partners;