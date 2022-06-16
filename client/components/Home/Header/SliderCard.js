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
            <Image src={"/images/PC  1.png"} width={900} height={400}></Image>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.imagediv}>
            {" "}
            <Image src={"/images/PC  1.png"} width={900} height={400}></Image>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.imagediv}>
            {" "}
            <Image src={"/images/PC  1.png"} width={900} height={400}></Image>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <Image
        src="/images/seiderImg.png"
        width={500}
        height={500}
        className={`img-fit rounded-3`}
      /> */}
    </div>
  );
}

export default SliderCard;
