import React from 'react'
import Navbar from './../Shared/Navbar/Navbar';
import MainfestoHero from './MainFestoHero/MainfestoHero';
import Styles from './Mainfesto.module.css';

function MainFesto() {
    return (
        <div className={Styles.mainFesot}>
            <Navbar />
            <MainfestoHero />
        </div>
    )
}

export default MainFesto