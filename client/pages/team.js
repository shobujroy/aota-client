import React from 'react';
import Mainfesto from '../components/Mainfesto/Mainfesto';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const team = () => {
    return (
        <div>
            <Navbar />
            <Mainfesto />
            <Footer  />
        </div>
    );
};

export default team;