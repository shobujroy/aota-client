import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import styles from "./Success.module.css";
import { MintContext } from "../../context/MintContext";

const Success = () => {
  const { trxHash } = useContext(MintContext);

  return (
    <div className={styles.Success}>
      <div className="container pb-4 pt-4">
        <div className="row">
          <div className={`col-md-12  col-sm-12 ${styles.SuccessMain}`}>
            <Image width={58} height={58} src={"/images/Vector.png"} />
            <h2>You have successfully minted.</h2>
            {trxHash ? (
              <p className={styles.message}>This is your hash of transaction: ${trxHash}</p>
            ) : (
              ""
            )}
            <p className={styles.nftMsg}>
              Please visit this link for the NFT
            </p>
            <Button className={styles.SuccessButton} href='https://opensea.io/collection/aota-genesis'>See Collections</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
