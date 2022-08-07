import Image from "next/image";
import React, { useContext } from "react";
import Styles from "./SliderCard.module.css";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { MintContext } from "./../../../context/MintContext";
const directionButtons = (direction) => {
  return (
    <span
      aria-hidden="true"
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction}
    </span>
  );
};
function SliderCard() {
  const { isConnected, connectwallet } = useContext(MintContext);
  return (
    <>
      <div className={Styles.slider}>
        <Carousel controls={false}>
          <Carousel.Item>
            <div className={Styles.carouselItem}>
              <h1>
                We’re Aliens on <br /> the ave
              </h1>
              <p>We're bringing creative coworking to the Metaverse.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className={Styles.two}>
            <div className={Styles.carousleItemTwo}>
               <h1>
                We’re Aliens on <br /> the ave
              </h1>
              <p>EXCLUSIVE MERCH Show off the Ave in style</p>
              </div>
          </Carousel.Item>
          <Carousel.Item className={Styles.two}>
            <div className={Styles.carouselItemThree}>
              <h1>
              ACCESS THE CREATIVE <br /> HAVEN
              </h1>
              <p>Coworking built by creatives for creatives</p>
            </div>
          </Carousel.Item>

          <Carousel.Item className={Styles.two}>
            <div className={Styles.carouselItemFour}>
              <h1>
              YOGA &  MEDITATION
              </h1>
              <p>A healthy mind & body is a creative one.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={Styles.IpadSLide}>
        <div className={Styles.heroMob}>
          
          <div className={Styles.mobConnectwallbutton}>
            {isConnected ? (
              <Link href={"/public-sale"}>
                <button>MINT</button>
              </Link>
            ) : (
              <button onClick={() => connectwallet()}>CONNECT WALLET</button>
            )}
          </div>
        </div>
      </div>



      <div className={Styles.mobileSLide}>
        <div className={Styles.heroMob}>
          
          <div className={Styles.mobConnectwallbutton}>
            {isConnected ? (
              <Link href={"/public-sale"}>
                <button>MINT</button>
              </Link>
            ) : (
              <button onClick={() => connectwallet()}>CONNECT WALLET</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
{
  /* <div className={Styles.textArea}>
<h1>We’re Aliens on the ave</h1>
<p>we’re Brainging crreative co-working to the Metaverse.</p>
<div className={Styles.buttonArea}>
  {isConnected ? (
    <Link href={"/public-sale"}>
      <button>MINT</button>
    </Link>
  ) : (
    <button onClick={() => connectwallet()}>CONNECT WALLET</button>
  )}
</div>
</div>
<div className={Styles.imageOne}>
<Image
  src={"/images/banner.png"}
  layout="fill"
  objectFit="cover"
></Image>
</div> */
}
