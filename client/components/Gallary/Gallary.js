import Styles from "./Gallary.module.css";
import Navbar from "../Shared/Navbar/Navbar";
import GalleryMain from "./GalleryMain/GalleryMain";
import Footer from "../Shared/Footer/Footer";
const Gallary = () => {
  return (
    <div className={Styles.gallary}>
      <Navbar />
      <GalleryMain />
      <Footer />
    </div>
  );
};

export default Gallary;
