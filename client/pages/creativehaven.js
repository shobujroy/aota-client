import React from 'react';
import CreativeHaven from '../components/CreativeHaven/CreativeHaven';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const creativehaven = () => {
    return (
        <div>
            <Navbar />
            <CreativeHaven />
            <Footer />
        </div>
    );
};

export default creativehaven;