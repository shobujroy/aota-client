import React from 'react';
import styles from './OurPartners.module.css';

import Image from 'next/image';



const OurPartners = () => {
    return (
        <div>
<div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.OurPartners}`}>
            <h1>Our Partners</h1>

            <div className={styles.Partners}>
           <Image src={"/images/Ourpanter/GivePower-Logo 1 (1).png"}           
           height={150}
           width={170}
           
           />





<Image src={"/images/Ourpanter/Onetreeplanted_logo 1 (1).png"}          
           height={150}
           width={275}
           />

<Image  src={"/images/Ourpanter/GivePower-Logo 1 (1).png"}         
           height={150}
           width={170}
           
           />

           
<Image src={"/images/Ourpanter/Onetreeplanted_logo 1.png"}           
          height={150}
          width={275}
           
           />


            </div>
            
            </div>
            </div>
          </div>
        </div>
    );
};

export default OurPartners;