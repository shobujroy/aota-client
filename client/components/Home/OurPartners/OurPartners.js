import React, { useState } from "react";
import styles from "./OurPartners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Carousel } from "react-bootstrap";

const OurPartners = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.OurPartners}`}>
            <h1>Our Partners</h1>


            <Carousel indicators={false} touch={true} activeIndex={index} onSelect={handleSelect} className={styles.Partners}>
              <Carousel.Item>

              <div className={styles.Partner}>
              <Image
                  src={"/images/PartnerLogos/BakersfieldBikeRentals.svg"}
                  height={150}
                  width={170}
                />

                <Image
                  src={"/images/PartnerLogos/BakersfieldBikeRentals_symbol.svg"}
                  height={150}
                  width={170}
                />
                <Image
                  src={"/images/PartnerLogos/Brangerine.svg"}
                  height={150}
                  width={170}
                />
                <Image
                  src={"/images/PartnerLogos/Brangerine_symbol.svg"}
                  height={150}
                  width={170}
                />
                </div>
              </Carousel.Item>

              <Carousel.Item>

              <div className={styles.Partner}>
              <Image
                  src={"/images/PartnerLogos/givepower.svg"}
                  height={150}
                  width={170}
                />

                <Image
                  src={"/images/PartnerLogos/givepower_symbol.svg"}
                  height={150}
                  width={170}
                />
                <Image
                  src={"/images/PartnerLogos/One Tree Planted.svg"}
                  height={150}
                  width={170}
                />
                <Image
                  src={"/images/PartnerLogos/One Tree Planted_symbol.svg"}
                  height={150}
                  width={170}
                />
                </div>


              
              </Carousel.Item>
            </Carousel> 

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
