import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import CommonHeader from '../components/Shared/CommonHeader/CommonHeader';
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