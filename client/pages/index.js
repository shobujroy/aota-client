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

// import Faq from '../components/Home/Faq/Faq';
import BorderLine from '../components/Home/BorderLine/BorderLine';
import MeetOurTeam from '../components/Home/MeetOurTeam/MeetOurTeam';
import OurPartners from '../components/Home/OurPartners/OurPartners';
import FaqAota from '../components/Home/FaqAota/FaqAota';

function Home() {


  
return (
    <div style={{overflowX: "hidden"}}>


      <Navbar />
      <Header />      
      <PressAbout />
      <BenefitsAndUtility />     
      <MeetOurTeam />
      <OurPartners />
      <FaqAota />
      {/* <Faq /> */}
      <Footer bg={'bg-main'} />
      






      {/* <BorderLine /> */}
      {/* <BorderLine /> */}
      {/* <NewItems /> */}
      {/* <HotCollection /> 
      <Partners />
      <BorderLine />
      */}
      {/* <HowItWork /> */}
      {/* <RoadMap />
      <BorderLine />
      <Gallery />
      <BorderLine />
      <Team />
      <BorderLine /> */}
      {/* <CallToAction /> */}
     
    </div>
  )
}

export default Home