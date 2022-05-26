import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import AOTA from "../../../contracts/AOTA.json";

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

function ProductCard({ isConnected, setIsConnected, hasMetamask, setHasMetamask, sign, setSign}) {
  const [pubPrice, setPubPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  async function pubMint(count) {
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

      const PUB_PRICE = await Cont.methods.pubPrice().call();
      console.log("reading pub_price from pubMint function in product card");
      console.log(PUB_PRICE);

      let total = count*PUB_PRICE
      console.log("total");
      console.log(total);

      let price = web3.utils.fromWei(total.toString(), "ether");
      console.log("calculated price in ether from pubMint function of product card");
      console.log(price);

      //price = count * price;
      //console.log("calculated total price from pubMint function of product card");
      //console.log(price);

      setPubPrice(price);
      console.log("pubPrice from pubMint function in product card");
      console.log(pubPrice);

      try {
        await Cont.methods.mintPubNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
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
    <><div>
      {hasMetamask ? (isConnected ? (<button onClick={() => disconnectwallet()}>{sign}</button>) : (<button onClick={() => connectwallet()}>Connect</button>)) : (
        "Please install metamask")}
    </div><div className={styles.card}>
        <h1 className="text-center fs-3">Public Sale</h1>
        <p className="text-center">0x23ed5b7CdaB7c4C5500F5Ba993e83D84E0f9F00D</p>

        <div className='d-flex justify-content-between flex-row pt-5'>
          <div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/gallery/3.PNG"
                alt="Gallery Image"
                width={200}
                height={200}
                className='img-fit rounded-3' />
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start ps-5'>
            <div className={`d-flex align-items-center ${ styles.quantityWrapper }`}>
              <span onClick={() => {
                if (quantity >= 1) {
                  setQuantity(quantity + 1);
                }
              }}><i class="fa-solid fa-plus"></i></span>
              <p className="ml-2">{quantity}</p>
              <span onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}><i class="fa-solid fa-minus"></i></span>
            </div>
            <h5 className='fw-bold mt-3'>Total</h5>
            <h3 className='fw-bold fs-2'> {pubPrice} ETH</h3>
            {isConnected ? <button className={`btn ${ styles.mintBtn }`} onClick={() => pubMint(quantity)}>MINT</button>
              : "Please connect wallet"}
          </div>
        </div>
        <div className="mt-5">
          <p className={styles.statusBar}>Status.....minting</p>
        </div>
      </div></>

  )
}

export default ProductCard