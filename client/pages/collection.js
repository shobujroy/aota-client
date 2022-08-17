import React, { useContext, useEffect, useState } from "react";
import { MintContext } from "./../context/MintContext";
import Navbar from "./../components/Shared/Navbar/Navbar";
import Footer from "./../components/Shared/Footer/Footer";
import NFTcard from "./../components/Collection/NFTcard";
import Link from "next/link";

function Collection() {
  const [dep, setDep] = useState(Math.random());
  const { myNFTs, collection, isConnected, hasMetamask, sign } =
    useContext(MintContext);

  useEffect(() => {
    myNFTs();
  }, [isConnected, hasMetamask, sign, dep]);
  return (
    <div style={{ backgroundColor: "#051509" }}>
      <Navbar BorderBottom={true} wallet={true} />
      <div className="container pt-3 pb-5">
        <div className="row">
          <h6 style={{ color: "#FFFFFF" }} className="d-flex flex-row align-items-center">
            <i className="fa-solid fa-arrow-left-long me-2"></i>
            <Link href={"/"} >Back</Link>
          </h6>
          <h1 style={{ color: "#FFFFFF" }} className="fw-bold">Collection</h1>
          <div className="mt-3 d-flex justify-content-between flex-wrap justify-content-sm-center">
            {collection.map((item, index) => {
              return <NFTcard api={item} setDep={setDep} />;
            })}
          </div>
        </div>
      </div>
      <Footer bg={"footer-bg-secondary"} />
    </div>
  );
}

export default Collection;
