import React from 'react';
import styles from './OurPartners.module.css';

import Image from 'next/image';

import GivePower from "../../../public/images/Ourpanter/GivePower-Logo 1 (1).png";
import GivePower1 from "../../../public/images/Ourpanter/GivePower-Logo 1.png";
import Onetreeplanted from "../../../public/images/Ourpanter/Onetreeplanted_logo 1 (1).png";
import Onetreeplanted_logo from "../../../public/images/Ourpanter/Onetreeplanted_logo 1.png";

const OurPartners = () => {
    return (
        <div>
<div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.OurPartners}`}>
            <h1>Our Partners</h1>

            <div className={styles.Partners}>
           <Image src={GivePower}           
           height={150}
           width={170}
           
           />





<Image src={Onetreeplanted}           
           height={150}
           
           />

<Image src={GivePower1}           
           height={150}
           
           />

           
<Image src={Onetreeplanted_logo}           
           height={150}
           
           />


            </div>
            
            </div>
            </div>
          </div>
        </div>
    );
};

export default OurPartners;