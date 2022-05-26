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
  const { isConnected, hasMetamask, sign, reserve, withdraw } = useContext(MintContext);

  useEffect(() => {
    console.log("isConnected and hasMetamask from useEffect of product card");
    console.log(isConnected);
    console.log(hasMetamask);
  }, [hasMetamask, isConnected]);

  /*async function connectwallet() {
    if (typeof window.ethereum !== "undefined") {
      web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      try {
        const provider = await web3Modal.connect();
        console.log("provider from connectwallet function in product card");
        console.log(provider);

        const web3 = new Web3(provider);
        console.log("web3 from connectwallet function in product card");
        console.log(web3);

        setIsConnected(true);
        console.log("isConnected from connectwallet function in product card");
        console.log(isConnected);

        setSign((await web3.eth.getAccounts())[0]);
        console.log("sign from connectwallet function in product card");
        console.log(sign);
      } catch (e) {
        console.log("error from connectwallet function in product card");
        console.log(e);
      }
    } else {
      setIsConnected(false);
      console.log("isConnected from connectwallet function in product card");
      console.log(isConnected);
    }
  }*/





  return (
    <><div>{hasMetamask ? (isConnected ? (<button onClick={() => disconnectwallet()}>{sign}</button>) : (<button onClick={() => connectwallet()}>Connect</button>)) : (
      "Please install metamask")}</div><div className='bg-third'>
        <Navbar BorderBottom={true} wallet={true} />
        <div className="container pt-3 pb-5">
          <div className="row">
            <div className='mt-3 d-flex justify-content-center'>
              <div className={styles.card}>
                <h1 className="text-center fs-3">Admin Pannel</h1>
                <p className="text-center">0x23ed5b7CdaB7c4C5500F5Ba993e83D84E0f9F00D</p>

                <div className='text-center pt-5'>
                  <button className={`btn ${ styles.mintBtn }`} onClick={() => reserve()}>Reserve Mint</button>
                  <br />
                  <button className={`btn ${ styles.withdrawBtn } mt-3`} onClick={() => withdraw()}>Withdraw Fund</button>
                </div>
                <div className="mt-5">
                  <p className={styles.statusBar}>Status.....minting</p>
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