import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styles from "./PressAbout.module.css";

function PressAbout() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div id="about" className="bg-secondary">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.imageWrapper} data-aos="zoom-in">
              <img  src={"/images/site.png"} alt="" className={`img-fit img-fluid ${styles.image}`} />
              {/* <Image
                
                src={"/images/site.png"}
                width={300}
                height={400}
                className={`img-fit img-fluid ${styles.image}`}
              /> */}
            </div>
          </div>
          <div
            className={`col-md-6 flex-column d-flex justify-content-center ${styles.AboutText}`}
          >
            <h3 className="text-primary">Unlock your Creativity</h3>
            <h1>What is AOTA?</h1>
            <p>
              Aliens on the Ave is a collection of 7146 unique Aliens living on
              the Ethereum Blockchain. Each AOTA is one of a kind & consists of
              over 400 traits each with it’s own varying degree of rarity. AOTA
              NFT’s grant proof of ownership on the Ethereum Blockchain. Based
              on the ERC-721 standard.
            </p>
            <p>
              AOTA acts as your key to the “Creative Haven” A member only
              co-working space built for creatives. Within this space we intend
              on bringing real world value to our community. Such as weekly live
              yoga sessions, mindful meditation practices &amp; “The Creators
              Challenge” a guaranteed way to break any artist blocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressAbout;
