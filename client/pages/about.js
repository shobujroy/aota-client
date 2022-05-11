import React from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/Footer/Footer'
import CommonHeader from '../components/shared/CommonHeader/CommonHeader';
import About from '../components/AboutUs/About';

function AboutUs() {
  return (
    <div className='bg-primary'>
      <Navbar />
      <CommonHeader
        title={'About Us'}
      />
      <About />
      <Footer />
    </div>
  )
}

export default AboutUs