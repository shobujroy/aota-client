import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar';
import Header from '../components/Home/Header/Header';
import NewItems from '../components/Home/NewItems/NewItems';
import HotCollection from '../components/Home/HotCollection/HotCollection';
import HowItWork from '../components/Home/HowItWork/HowItWork';
import CallToAction from '../components/Home/CallToAction/CallToAction'
import Footer from '../components/Shared/Footer/Footer';

function Home() {
  return (
    <div className='bg-primary'>
      <Navbar />
      <Header />
      <NewItems />
      <HotCollection />
      <HowItWork />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home