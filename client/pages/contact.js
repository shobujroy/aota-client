import React from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/Footer/Footer'
import CommonHeader from '../components/shared/CommonHeader/CommonHeader';
import Contact from '../components/Contact/Contact';

function ContactIndex() {
  return (
    <div className='bg-primary'>
      <Navbar />
      <CommonHeader
        title={'Contact Us'}
      />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactIndex