import React from "react";
import Image from "next/image";
import styles from "./Partners.module.css";

function Partners() {
  return (
    <div id="partners" className="bg-main">
      <div className="container pb-5 pt-5">
        <div className="row">
          <h1 className="fn-futura ls-3 text-uppercase fw-normal">Partners</h1>
          <p className="mt-3 fn-futura">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            reiciendis reprehenderit hic dicta eligendi, fugit inventore nobis
            quibusdam magnam impedit! Tempora velit voluptatum minus
            exercitationem, non aut harum voluptatibus facilis mollitia ullam
            maiores dicta assumenda officiis nulla quis dolorem id ut, aliquid
            optio modi beatae illo corrupti quae! Neque, qui!
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="me-3">
              <Image
                src={"/images/partner/Onetreeplanted_logo_dark.png"}
                width={301}
                height={160}
                className="mr-3"
              />
            </div>
            <div className="me-3">
              <Image
                src={"/images/partner/GivePower-Logo_dark.png"}
                width={154}
                height={134}
                className="mr-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
