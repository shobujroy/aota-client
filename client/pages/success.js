import React from 'react'
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';
import Success from '../components/Success/Success';

function success() {
    return (
        <div className='bg-third'>
            <Navbar  wallet={true} />
            <Success />
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default success