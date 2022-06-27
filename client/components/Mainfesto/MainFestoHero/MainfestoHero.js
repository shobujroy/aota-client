import Styles from "./MainfestoHero.module.css";
import Image from "next/image";

const MainfestoHero = () => {
  return (
    <div className={Styles.mainfestoHero}>
      <div className={Styles.maiFestoHeroLeft}>
        <Image
          src={"/images/Blue Crystal.png"}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className={Styles.mainFestoHeroRight}>
        <h6>Manifesto</h6>
        <h1>
          The Dawn of a <br /> New Era
        </h1>
        <p>
          To a life full of your wildesrt dreams coming true. Creating the
          Unimagianable & taking the Road less traveled. Deep into the Cosmos.
          down the rabbit hole we go. This is for the Thinkers. artist. misfits,
          Degens. Sanding Out’s Starting To feel a lot like Home.
        </p>
        <p>
          Step into your world. A world of wonder & no Limitations. Leave your
          Insecurities at the Door, You wont’t need them here. If we grow, you
          grow, we go together welcome to the creative Haven.
        </p>
      </div>
    </div>
  );
};

export default MainfestoHero;
