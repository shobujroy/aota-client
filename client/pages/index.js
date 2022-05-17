import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar';
import Header from '../components/Home/Header/Header';
import NewItems from '../components/Home/NewItems/NewItems';
import HotCollection from '../components/Home/HotCollection/HotCollection';
import HowItWork from '../components/Home/HowItWork/HowItWork';
import CallToAction from '../components/Home/CallToAction/CallToAction'
import Footer from '../components/Shared/Footer/Footer';
import RoadMap from '../components/Home/RoadMap/RoadMap';
import PressAbout from '../components/Home/PressAbout/PressAbout';
import BenefitsAndUtility from '../components/Home/BenefitsAndUtility/BenefitsAndUtility';
import Gallery from './../components/Home/Gallery/Gallery';

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <PressAbout />
      <BenefitsAndUtility />
      {/* <NewItems /> */}
      {/* <HotCollection /> */}
      {/* <HowItWork /> */}
      <RoadMap />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home