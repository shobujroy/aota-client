import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Styles from "./Mainfesto.module.css";
import MainfestoHero from "./MainFestoHero/MainfestoHero";
const MainFesto = () => {
  return (
    <div className={Styles.mainFesot}>
      <Navbar />
      <MainfestoHero />
    </div>
  );
};

export default MainFesto;
