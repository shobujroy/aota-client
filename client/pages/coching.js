import React from 'react';
import OnCoching from '../components/OnCoching/OnCoching';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const coching = () => {
    return (
        <div>
            <Navbar />
            <OnCoching />
            <Footer />
        </div>
    );
};

export default coching;