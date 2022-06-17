import Image from "next/image";
import React from "react";
import Styles from "./SliderCard.module.css";
import { Carousel } from "react-bootstrap";
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
  return (
    <div className={Styles.slider}>
      <Carousel
        nextLabel={""}
        prevLabel={""}
        nextIcon={directionButtons("")}
        prevIcon={directionButtons("")}
      >
        <Carousel.Item>
          <div className={Styles.imagediv}>
            {" "}
            {/*
             */}
            <Image src={"/images/PC  1.png"} width={1046} height={678}></Image>
            <h1 className="">We’re Aliens on the ave</h1>
            <p>we’re Brainging crreative co-working to the Metaverse.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={Styles.imagediv}>
            {" "}
            {/*
             */}
            <Image src={"/images/PC  1.png"} width={1046} height={478}></Image>
            <h1 className="">We’re Aliens on the ave</h1>
            <p>we’re Brainging crreative co-working to the Metaverse.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.imagediv}>
            {" "}
            {/*
             */}
            <Image src={"/images/PC  1.png"} width={1046} height={478}></Image>
            <h1 className="">We’re Aliens on the ave</h1>
            <p>we’re Brainging crreative co-working to the Metaverse.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderCard;
