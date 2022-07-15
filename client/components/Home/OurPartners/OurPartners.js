import React, { useState } from "react";
import styles from "./OurPartners.module.css";

const OurPartners = () => {

  return (
    <div className={styles.OurPartnersPart}>
      <div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.OurPartners}`}>
            <h1>Partners</h1>
            <div className={styles.Partner}>
              <div className={styles.PartnerBrangerine}></div>
              <div className={styles.PartnerOneTree}></div>
              <div className={styles.PartnerBikeRentals}></div>
              <div className={styles.PartnerGivepower}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
