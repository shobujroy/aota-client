import Navbar from "../Shared/Navbar/Navbar";
import OnlineClassContent from "./OnlineCassContent/OnlineClassContent";
import Styles from "./Onlineclassmain.module.css";
const OnlineClassMain = () => {
  return (
    <div className={Styles.onlineClassMain}>
      <Navbar />
      <OnlineClassContent />
    </div>
  );
};

export default OnlineClassMain;
