import React, { useContext } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import ProductCard from "../../components/PublicSale/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from './Public-sale.module.css';

function Index() {
  return (
    <div style={{ backgroundColor: "#051509" }}>
      <Navbar BorderBottom={true} wallet={true} />
      <div className="container pt-3 pb-5">
        <div className="row">
          <h6 className={`d-flex flex-row align-items-center ${styles.text}`}>
            <i className="fa-solid fa-arrow-left-long me-2"></i>
            <Link href={"/"} >Back</Link>
          </h6>
          <div className="mt-3 d-flex justify-content-center">
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer bg={"footer-bg-secondary"} />
    </div>
  );
}

export default Index;
