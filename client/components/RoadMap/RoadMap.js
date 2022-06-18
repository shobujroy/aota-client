import React from "react";
import Image from "next/image";
import styles from "./RoadMap.module.css";
import { Carousel } from "react-bootstrap";
const directionButtons = (direction) => {
  return (
    <span
      aria-hidden="true"
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction}
    </span>
  );
};

const RoadMap = () => {

  function scrollRoadMapPrev() {
    document.getElementById("roadMap").scrollBy(-500, -0);
  }

  function scrollRoadMapNext() {
    document.getElementById("roadMap").scrollBy(500, 0);
  }

  return (
    <>
      <div className={styles.RoadMapMain}>
        <div className="bg-secondary">
          <div className="container pt-0 pb-0">
            <div className="row">
              <div className={`col-md-12 col-sm-12 ${styles.RoadMapBanner}`}>
                <div className={styles.RoadMapText}>
                  <h1>ROADMAP TO THE MOON</h1>
                </div>
                <div className={styles.RoadMapMan}>
                  <Image
                    width={842}
                    height={898}
                    src={"/images/RoadMap1.png"}
                  />
                </div>
                <div className={styles.RoadMapShap}>
                  <Image
                    width={433}
                    height={203}
                    src={"/images/Mask group.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rideMapWrapper}>
        <div id="roadMap" className={styles.RoadMapSlider}>
          <img
            src={'/images/roadmap.svg'}
            width={'200%'}
            height={'100%'}
            className={styles.RoadMapSliderImg}
          />
        </div>
        <div onClick={() => scrollRoadMapNext()} className={`${styles.sliderNextBtn}`}>
          <Image
            src={'/images/Group 3.png'}
            width={50}
            height={50}
          />
        </div>
        <div onClick={() => scrollRoadMapPrev()} className={`${styles.sliderPreviousBtn}`}>
          <Image
            src={'/images/Group 4.png'}
            width={50}
            height={50}
          />
        </div>
      </div>
    </>
  );
};
export default RoadMap;