import React from "react";
// using components
import Navbar from "../components/Shared/Navbar/Navbar";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import MeetOurTeam from "../components/Home/MeetOurTeam/MeetOurTeam";
import OurPartners from "../components/Home/OurPartners/OurPartners";
import FaqAota from "../components/Home/FaqAota/FaqAota";
import PerksUtility from "../components/Home/PerksUtility/PerksUtility";
import PressAbout from "../components/Home/PressAbout/PressAbout";
// un-using components
// import NewItems from '../components/Home/NewItems/NewItems';
// import HotCollection from '../components/Home/HotCollection/HotCollection';
// import HowItWork from '../components/Home/HowItWork/HowItWork';
// import CallToAction from '../components/Home/CallToAction/CallToAction'
// import RoadMap from '../components/Home/RoadMap/RoadMap';
// import BenefitsAndUtility from '../components/Home/BenefitsAndUtility/BenefitsAndUtility';
// import Faq from '../components/Home/Faq/Faq';
// import BorderLine from '../components/Home/BorderLine/BorderLine';

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Header />
      <PressAbout />
      <PerksUtility />
      <MeetOurTeam />
      <OurPartners />
      <FaqAota />
      <Footer bg={"bg-main"} />

      {/* 
      <Faq /> 
      <BorderLine /> 
      <BorderLine /> 
      <NewItems /> 
      <HotCollection /> 
      <Partners />
      <BorderLine />
      <BenefitsAndUtility />      
      <HowItWork />
      <RoadMap />
      <BorderLine />
      <Gallery />
      <BorderLine />
      <Team />
      <BorderLine />
      <CallToAction /> */}
    </div>
  );
}

export default Home;
