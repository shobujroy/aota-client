import React from "react";
import Image from "next/image";
import style from "./BenefitsAndUtility.module.css";

function BenefitsAndUtilityCard({ imgLeft, image, title, p }) {
  return (
    <div
      className={`card p-3 mb-4 ${style.benefitsCard}`}
      style={{  border: "1px solid #fff" }}
    >
      <div className={`shadow w-max ${style.ImageShado}`}>
        <Image src={image} width={56} height={56} />
      </div>
      <h6 className="pt-2 pb-2">{title}</h6>
      <p>{p}</p>
    </div>
  );
}

export default BenefitsAndUtilityCard;