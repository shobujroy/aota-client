import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import contract from "../../../contracts/AOTA.json";

let web3Modal;
const add = "0x3AF66e490A19b1b9C395ee21409E3ac39af69426";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "29a4aa8775aa42caace0437559c37bb4",
        }
    }
};

if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });
    console.log("web3Modal");
    console.log(web3Modal);
  }

function ProductCard() {
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [sign, setSign] = useState(undefined);
    const [pubPrice, setPubPrice] = useState("");

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
          setHasMetamask(true);
          console.log("window.ethereum !== undefined");
        }
      }, []);
    
      async function connect() {
        if (typeof window.ethereum !== "undefined") {
          try {
            const provider = await web3Modal.connect();
            console.log("provider");
            console.log(provider);
            const web3 = new Web3(provider);
            console.log("web3");
            console.log(web3);
            setIsConnected(true);
            setSign((await web3.eth.getAccounts())[0]);
            console.log(sign);
          } catch (e) {
            console.log(e);
          }
        } else {
          setIsConnected(false);
        }
      }

      async function pubMint(count) {
        if (typeof window.ethereum !== "undefined") {
          const Cont = new web3.eth.Contract(contract, add, sign);
          console.log(Cont);
          let price = count * web3.utils.toWei(Cont.PUB_PRICE.toString(), "ether");
          console.log(price);
          setPubPrice(price);
          console.log(setPubPrice);
          try {
            await Cont.methods.mintPubNFTs().send({from:sign, value: price}, function(err, txHash) {
              if (err) {
                  console.log(err);
              } else {
                console.log(txHash);
              }
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("Please install MetaMask");
        }
      }

    return (
        <><div>
            {hasMetamask ? (isConnected ? (sign) : (<button onClick={() => connect()}>Connect</button>)) : (
                "Please install metamask")}
        </div><div className={styles.card}>
                <h1 className="text-center fs-3">Public Sale</h1>
                <p className="text-center">0x3AF66e490A19b1b9C395ee21409E3ac39af69426</p>

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
                        <div className={`d-flex align-items-center ${styles.quantityWrapper}`}>
                            <span><i class="fa-solid fa-plus"></i></span>
                            <p className="ml-2">2</p>
                            <span><i class="fa-solid fa-minus"></i></span>
                        </div>
                        <h5 className='fw-bold mt-3'>Total</h5>
                        <h3 className='fw-bold fs-2'> {pubPrice} ETH</h3>
                        {isConnected ? <button className={`btn ${styles.mintBtn}`} onClick={() => pubMint(2)}>MINT</button> 
                        : "Please install metamask"}
                    </div>
                </div>
                <div className="mt-5">
                    <p className={styles.statusBar}>Status.....minting</p>
                </div>
            </div></>
        
    )
}

export default ProductCard