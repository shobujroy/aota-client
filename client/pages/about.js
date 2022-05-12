import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import CommonHeader from '../components/Shared/CommonHeader/CommonHeader';
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