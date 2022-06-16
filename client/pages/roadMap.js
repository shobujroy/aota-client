import React from 'react';
import RoadMap from '../components/RoadMap/RoadMap';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const roadMap = () => {
    return (
        <div>
            <Navbar />

            <RoadMap />
            <Footer />
        </div>
    );
};

export default roadMap;