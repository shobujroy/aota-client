import React from 'react'
import ProductCard from './../components/PublicSale/ProductCard/ProductCard';
import styles from '../styles/withdraw.module.css';
import WithDraw from './withdraw';
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';
import Image from 'next/image';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import AOTA from "../contracts/AOTA.json";

let web3Modal;
const add = "0x23ed5b7CdaB7c4C5500F5Ba993e83D84E0f9F00D";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "29a4aa8775aa42caace0437559c37bb4",
    }
  }
};

function withdraw({ isConnected, setIsConnected, hasMetamask, setHasMetamask, sign, setSign}) {

  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
    console.log("web3Modal from product card");
    console.log(web3Modal);
  }

  useEffect(() => {
    console.log("isConnected and hasMetamask from useEffect of product card");
    console.log(isConnected);
    console.log(hasMetamask);
  }, [hasMetamask, isConnected]);

  async function connectwallet() {
    if (typeof window.ethereum !== "undefined") {
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
  }

  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      const provider = await web3Modal.connect();
      console.log("provider from connect function in product card");
      console.log(provider);

      const web3 = new Web3(provider);
      console.log("web3 from connect function in product card");
      console.log(web3);

      const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
      console.log("contruct intance from pubMint function in product card");
      console.log(Cont);

      try {
        await Cont.methods.withdraw().send({ from: sign }, function (err, txHash) {
          if (err) {
            console.log("error from results of send transaction of pubMint function in product card");
            console.log(err);
          } else {
            console.log("txHash from pubMint function in product card");
            console.log(txHash);
          }
        });
      } catch (error) {
        console.log("error from mint transaction of pubMint function in product card");
        console.log(error);
      }
    } else {
      console.log("Please have the right amount of money");
    }
  }

  async function reserve() {
    if (typeof window.ethereum !== "undefined") {
      const provider = await web3Modal.connect();
      console.log("provider from connect function in product card");
      console.log(provider);

      const web3 = new Web3(provider);
      console.log("web3 from connect function in product card");
      console.log(web3);

      const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
      console.log("contruct intance from pubMint function in product card");
      console.log(Cont);

      try {
        await Cont.methods.reserveNFTs().send({ from: sign }, function (err, txHash) {
          if (err) {
            console.log("error from results of send transaction of pubMint function in product card");
            console.log(err);
          } else {
            console.log("txHash from pubMint function in product card");
            console.log(txHash);
          }
        });
      } catch (error) {
        console.log("error from mint transaction of pubMint function in product card");
        console.log(error);
      }
    } else {
      console.log("Please have the right amount of money");
    }
  }

  async function disconnectwallet() {
    await web3Modal.clearCachedProvider();

    setSign(undefined);
    console.log("sign from disconnectwallet function in Navbar");
    console.log(sign);

    setIsConnected(false);
    console.log("isConnected from disconnectwallet function in Navbar");
    console.log(isConnected);
    //setHasMetamask(false);
}

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
                  <button className={`btn ${styles.mintBtn}`} onClick={() => reserve()}>Reserve Mint</button>
                  <br />
                  <button className={`btn ${styles.withdrawBtn} mt-3`} onClick={() => withdraw()}>Withdraw Fund</button>
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