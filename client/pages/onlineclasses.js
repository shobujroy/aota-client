import React from 'react';
import OnlineClasses from '../components/OnlineClasses/OnlineClasses';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const onlineclasses = () => {
    return (
        <div>

            <Navbar />
            <OnlineClasses />
            <Footer />
        </div>
    );
};

export default onlineclasses;