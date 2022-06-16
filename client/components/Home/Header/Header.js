import React, { useContext } from "react";
import SliderCard from "./SliderCard";
import Carousel from "react-grid-carousel";
import Navbar from "../../Shared/Navbar/Navbar";
import styles from "./Header.module.css";
import { MintContext } from "./../../../context/MintContext";
import Link from "next/link";
import Image from "next/image";

import bannerShap from "../../../public/images/Bannershap.png";

function Header() {
  const { isConnected, connectwallet } = useContext(MintContext);
  return (
    <div className="bg-primary">
      <div className="fn-montserrat">
        <div style={{ position: "absolute", top: "70px", left: "-290px" }}>
          <Image src={bannerShap} width={610} height={710} />
        </div>
        <SliderCard />
        <div className="row">
          <div className="col-md-12 pt-5 pb-5">
            <div className={`${styles.headerContent}`}>
              <h1 className="">We’re Aliens on the ave</h1>
              <p>we’re Brainging crreative co-working to the Metaverse.</p>
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
