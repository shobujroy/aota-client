import React from "react";
import Image from "next/image";

function MemberCard() {
  return (
    <div style={{ width: "18rem", margin: "2rem" }}>
      <Image
        src="/images/jkob.png"
        width={300}
        height={300}
        className="card-img-top img-fit"
        alt="..."
      />
      <div className="card-body d-flex flex-row justify-content-between align-items-center">
        <div>
          <h5 className="card-title fn-montserrat">Jacob Flores</h5>
          <p className="fn-futura">FOUNDER/ARTIST</p>
        </div>
        <div>
          <i className="fa-brands fa-instagram fs-3"></i>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
