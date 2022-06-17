import React, { useContext } from "react";
import SliderCard from "./SliderCard";
import Carousel from "react-grid-carousel";
import Navbar from "../../Shared/Navbar/Navbar";
import styles from "./Header.module.css";
import { MintContext } from "./../../../context/MintContext";
import Link from "next/link";
import Image from "next/image";



function Header() {
  const { isConnected, connectwallet } = useContext(MintContext);
  return (
    <div className="bg-primary">
      <div className="fn-montserrat">
        <div className={styles.BannerShap}>
          <Image  src={"/images/Bannershap.png"} width={610} height={710} />
        </div>
        <SliderCard />
        <div className="row">
          <div className={styles.hello}>
            <div className={`${styles.headerContent}`}>
              <div className="text-center">
                {isConnected ? (
                  <Link href={"/public-sale"}>
                    <button>MINT</button>
                  </Link>
                ) : (
                  <button onClick={() => connectwallet()}>
                    CONNECT WALLET
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
