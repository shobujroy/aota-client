import React from "react";
import Image from "next/image";
import styles from "./RoadMap.module.css";

import { useState } from "react";

const RoadMap = () => {
  const [number, setNumber] = useState(1);

  function scrollRoadMapPrev() {
    document.getElementById("roadMap").scrollBy(-500, -0);
    setNumber(number - 1);
  }

  function scrollRoadMapNext() {
    document.getElementById("roadMap").scrollBy(500, 0);
    setNumber(number + 1);
  }

  return (
    <>
      <div className={styles.RoadMapMain}>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.RoadWrapper}`}
            >
              <h1>ROADMAP TO THE MOON</h1>
              <div className={styles.Roadimage}>
                <Image src={"/images/Maskgroup.png"} width={433} height={203} />
              </div>
            </div>

            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.MapWrapper}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={"/images/manifesto222.png"}
                  width={396}
                  height={567}
                  className={`img-fit img-fluid ${styles.image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rideMapWrapper}>
        <div id="roadMap" className={styles.RoadMapSlider}>
          <div className={styles.sliderMain}>
            <div className={styles.SliderMainFirst}>
              <h2>Discovery</h2>
              <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
              <li>Whitelist Price 0.07 ETH</li>
              <li>Public Price 0.09 ETH</li>
              <div className={styles.numbers}>
                <p
                  className={
                    number == 1 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  1
                </p>
              </div>
              <Image src={"/images/Phase_1.png"} width={162} height={72} />
            </div>
            <div
              className={styles.SliderMainFirst}
              id={styles.sliderMainSecond}
            >
              <Image
                src={"/images/Phase_2.png"}
                width={162}
                height={72}
                className={styles.phaseTwo}
              />

              <div className={styles.numbers}>
                <p
                  className={
                    number == 2 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  2
                </p>
              </div>
              <h2>Establish Communication</h2>
              <li>Develop Storyline</li>
              <li>Aquire Land in Sandbox</li>
              <li>Airdrop 1</li>
            </div>
            <div className={styles.SliderMainFirst}>
              <h2>Make Contact</h2>
              <li>Exclusive Merch</li>
              <li>Announce Partnership</li>
              <li>Airdrop 2</li>

              <div className={styles.numbers}>
                <p
                  className={
                    number == 3 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  3
                </p>
              </div>
              <Image src={"/images/Phase_3.png"} width={162} height={72} />
            </div>
            <div
              className={styles.SliderMainFirst}
              id={styles.sliderMainSecond}
            >
              <Image
                src={"/images/Phase_4.png"}
                width={162}
                height={72}
                className={styles.phaseTwo}
              />

              <div className={styles.numbers}>
                <p
                  className={
                    number == 4 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  4
                </p>
              </div>

              <h2>Co-Exist</h2>
              <li>Airdrop 3</li>
              <li>AOTA: Vol. 2 Teaser</li>
            </div>
            <div className={styles.SliderMainFirst}>
              <h2>Build Colony</h2>
              <li>Break Ground for Creative Space</li>
              <li>Introduce AOTA vol.2</li>
              <li>Givepower Trek: Kenya 2023</li>
              <div className={styles.numbers}>
                <p
                  className={
                    number == 5 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  5
                </p>
              </div>
              <Image src={"/images/Phase_5.png"} width={162} height={72} />
            </div>
            <div
              className={styles.SliderMainFirst}
              id={styles.sliderMainSecond}
            >
              <Image
                src={"/images/Phase_6.png"}
                width={162}
                height={72}
                className={styles.phaseTwo}
              />

              <div className={styles.numbers}>
                <p
                  className={
                    number == 6 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  6
                </p>
              </div>
              <h2>Adancements</h2>
              <li>Develop Metaverse Avatars</li>
              <li>More to come</li>
            </div>
          </div>
        </div>
        <div
          onClick={() => scrollRoadMapNext()}
          className={`${styles.sliderNextBtn}`}
        >
          <Image src={"/images/Group 3.png"} width={50} height={50} />
        </div>
        <div
          onClick={() => scrollRoadMapPrev()}
          className={`${styles.sliderPreviousBtn}`}
        >
          <Image src={"/images/Group 4.png"} width={50} height={50} />
        </div>
      </div>
    </>
  );
};
export default RoadMap;
