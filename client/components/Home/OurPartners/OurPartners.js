import React from "react";
import styles from "./OurPartners.module.css";

const OurPartners = () => {

  return (
    <div className={styles.OurPartnersPart}>
      <div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.OurPartners}`}>
            <h1>Partners</h1>
            <div className={styles.Partner}>
              <a href="https://www.brangerine.com/" target="_blank" className={styles.PartnerBrangerine}>
              </a>




              <a href="https://onetreeplanted.org/" target="_blank" className={styles.PartnerOneTree}></a>
              <a href="https://www.instagram.com/bakersfieldbikerentals/" target="_blank" className={styles.PartnerBikeRentals}></a>
              <a href="https://www.givepower.org/" target="_blank" className={styles.PartnerGivepower}></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
