import MainfestoHero from './../components/Mainfesto/MainFestoHero/MainfestoHero';
import Navbar from './../components/Shared/Navbar/Navbar';
import styles from '../styles/Mainfesto.module.css';

const Mainfesto = () => {
  return (
    <div className={styles.mainFesot}>
      <Navbar />
      <MainfestoHero />
    </div>
  );
};

export default Mainfesto;
