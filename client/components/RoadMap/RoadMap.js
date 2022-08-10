import Image from "next/image";
import React from "react";
import styles from "./RoadMap.module.css";

import { useState } from "react";

const RoadMap = () => {
  const [number, setNumber] = useState(1);

  function scrollRoadMapPrev() {
    document.getElementById("roadMap").scrollBy(-400, -0);
    setNumber(number - 1);
  }

  function scrollRoadMapNext() {
    document.getElementById("roadMap").scrollBy(400, 0);
    setNumber(number + 1);
  }

  return (
    <>
      <div className={styles.RoadMapMain}>
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.RoadWrapper}`}
            >
              <h1>ROADMAP</h1>
            </div>

            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.MapWrapper}`
              }
            >
              <div className={styles.imageWrapper} data-aos="zoom-in">
                {/* <img src="/images/roadmap/Crystal.png" alt="" /> */}
                
              </div>
              {/* <div className={styles.imageWrapper2} data-aos="zoom-in">
                
                <Image
          data-aos="zoom-in"
          src={"/images/Blue Crystal.png"}
          layout="fill"
          objectFit="cover"
          className={styles.roadmapImg}
        ></Image>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rideMapWrapper}>
        <div id="roadMap" className={styles.RoadMapSlider}>
          <div className={styles.sliderMain}>
            <div className={styles.SliderMainFirst}>
              <h2>Discovery</h2>
              <li>Launch 7146 Aliens on the ethereum blockchain</li>
              <li>Whitelist Price 0.07 ETH</li>
              <li>Public Price 0.09 ETH</li>
              <div className={styles.numbers}>
                <h3
                  className={
                    number == 1 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  1
                </h3>
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
                <h3
                  className={
                    number == 2 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  2
                </h3>
              </div>
              <h2>Establish Communication</h2>
              <li>Develop Storyline</li>
              <li>Acquire Land in Sandbox</li>
              <li>Airdrop 1</li>
            </div>
            <div className={styles.SliderMainFirst}>
              <h2>Make Contact</h2>
              <li>Exclusive Merch</li>
              <li>Announce Partnership</li>
              <li>Airdrop 2</li>

              <div className={styles.numbers}>
                <h3
                  className={
                    number == 3 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  3
                </h3>
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
                <h3
                  className={
                    number == 4 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  4
                </h3>
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
                <h3
                  className={
                    number == 5 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  5
                </h3>
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
                <h3
                  className={
                    number == 6 ? styles.numberStyle : styles.numberStyleTwo
                  }
                >
                  6
                </h3>
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
          <Image src={"/images/Group 3.png"} width={50} height={50} />
        </div>
      </div>
    </>
  );
};
export default RoadMap;
