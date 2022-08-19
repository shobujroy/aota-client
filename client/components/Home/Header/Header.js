import React, { useContext } from "react";
import SliderCard from "./SliderCard";
import styles from "./Header.module.css";
import { MintContext } from "./../../../context/MintContext";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-primary">
      <div className="fn-Montserrat-Regular">
        <div className={styles.BannerShap}>
          <Image src={"/images/Bannershap.png"} width={610} height={710} />
        </div>
        <SliderCard />
      </div>
    </div>
  );
}

export default Header;
