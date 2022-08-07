import Navbar from "../Shared/Navbar/Navbar";
import Styles from "./Mainfesto.module.css";
import MainfestoHero from "./MainFestoHero/MainfestoHero";
const MainFesto = () => {
  return (
    <div className={Styles.mainFesot}>
      <Navbar />
      <MainfestoHero />
      {/* <Footer bg={"bg-main"} /> */}
    </div>
  );
};

export default MainFesto;
