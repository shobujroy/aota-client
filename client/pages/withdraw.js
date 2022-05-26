import React, { useContext } from 'react'
import ProductCard from './../components/PublicSale/ProductCard/ProductCard';
import styles from '../styles/withdraw.module.css';
import WithDraw from './withdraw';
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';
import Image from 'next/image';
import { useState, useEffect } from "react";
import AOTA from "../contracts/AOTA.json";
import { MintContext } from './../context/MintContext';


function withdraw() {
  const { isConnected, hasMetamask, sign, reserve, withdraw, trxHash } = useContext(MintContext);

  useEffect(() => {
    console.log("isConnected and hasMetamask from useEffect of product card");
    console.log(isConnected);
    console.log(hasMetamask);
  }, [hasMetamask, isConnected]);

  return (
    <><div>
        <Navbar BorderBottom={true} wallet={true} />
        <div className="container pt-3 pb-5">
          <div className="row">
            <div className='mt-3 d-flex justify-content-center'>
              <div className={styles.card}>
                <h1 className="text-center fs-3">Admin Pannel</h1>
                <p className="text-center"><a href='https://testnets.opensea.io/collection/aliens-on-the-ave-v3'>View Collection on OpenSea</a></p>

                <div className='text-center pt-5'>
                  <button className={`btn ${ styles.mintBtn }`} onClick={() => reserve()}>Reserve Mint</button>
                  <br />
                  <button className={`btn ${ styles.withdrawBtn } mt-3`} onClick={() => withdraw()}>Withdraw Fund</button>
                </div>
                <div className="mt-5">
                  <p className={styles.statusBar}>see transaction: https://rinkeby.etherscan.io/tx/{trxHash}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer bg={'footer-bg-secondary'} />
      </div></>
  )
}

export default withdraw