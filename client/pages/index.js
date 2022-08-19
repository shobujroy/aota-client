import React from "react";
import FaqAota from "../components/Home/FaqAota/FaqAota";
import Header from "../components/Home/Header/Header";
import MeetOurTeam from "../components/Home/MeetOurTeam/MeetOurTeam";
import OurPartners from "../components/Home/OurPartners/OurPartners";
import PerksUtility from "../components/Home/PerksUtility/PerksUtility";
import PressAbout from "../components/Home/PressAbout/PressAbout";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";


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
    </div>
  );
}

export default Home;
