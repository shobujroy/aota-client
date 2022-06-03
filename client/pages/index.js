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
import Team from '../components/Home/Team/Team';
import Partners from '../components/Home/Partners/Partners';
import Faq from '../components/Home/Faq/Faq';
import BorderLine from '../components/Home/BorderLine/BorderLine';

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <BorderLine />
      {/* <PressAbout /> */}
      <BenefitsAndUtility />
      <BorderLine />
      {/* <NewItems /> */}
      {/* <HotCollection /> */}
      {/* <HowItWork /> */}
      <RoadMap />
      <BorderLine />
      <Gallery />
      <BorderLine />
      <Team />
      <BorderLine />
      <Partners />
      <BorderLine />
      <Faq />
      {/* <CallToAction /> */}
      <Footer bg={'bg-main'} />
    </div>
  )
}

export default Home