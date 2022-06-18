
import Image from 'next/image';
import React from 'react';
import { Button } from 'react-bootstrap';

import styles from "./Success.module.css";


const Success = () => {
    return (
        <div className={styles.Success}>

<div className="container pb-4 pt-4">
        <div className="row">
          <div className={`col-md-12  col-sm-12 ${styles.SuccessMain}`}>
            <Image width={58} height={58} src={"/images/Vector.png"} />
            <h2>You have successfully minted.</h2>
            <p>Please visit this link for the <a style={{color: "#0b66aa"}} href="">the NFT</a> </p>
            <Button className={styles.SuccessButton}>See Collections</Button>


            </div>

</div> 
</div>          
        </div>
    );
};

export default Success;