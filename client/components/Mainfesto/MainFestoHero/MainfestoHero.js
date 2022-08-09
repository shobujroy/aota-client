import Image from "next/image";
import Styles from "./MainfestoHero.module.css";

const MainfestoHero = () => {
  return (
    <div className={Styles.mainfestoHero}>

      <div className={Styles.mainFestoHeroRight}>
        <h6>Manifesto</h6>
        <h1>
          The Dawn of a <br /> New Era
        </h1>
        <p>To a life full of your wildest dreams coming true.</p>
        <p>
          {" "}
          {`Creating the unimaginable & taking the road less traveled. `}
        </p>{" "}
        <p>Deep into the Cosmos.  </p>
        <p>Down the rabbit hole we go.</p>{" "}
        <p>{`This is for the thinkers, artists, misfits, & degens.`}</p>{" "}
        <p>Standing out’s starting to feel a lot like home.</p>
        <p>{`Step into our world, a world of wonder & no limitations.`}</p>
        <p>Leave your insecurities at the door, you won’t be needing them here.</p>
        <p>
          If we grow, you grow, we grow together.
        </p>
        <p>
          Welcome to the Creative Haven
        </p>
      </div>


      <div className={Styles.maiFestoHeroLeft}>
        <Image
          data-aos="zoom-in"
          src={"/images/Blue Crystal.png"}
          layout="fill"
          objectFit="cover"
          className={Styles.maniFestoImage1}
        ></Image>
        <Image
          data-aos="zoom-in"
          src={"/images/Afrojack 1.png"}
          layout="fill"
          objectFit="cover"
          className={Styles.maniFestoImage2}
        ></Image>
      </div>
    </div>
  );
};

export default MainfestoHero;
