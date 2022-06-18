import React from "react";
import Image from "next/image";
import styles from "./RoadMap.module.css";

import { useState } from "react";

const RoadMap = () => {
  let [margin, setMargin] = useState(0);
  const increase = () => {
    setMargin += 300;
  };
  console.log(margin);
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
    </>
  );
};

export default RoadMap;
