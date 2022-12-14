import Image from 'next/image';
import React, { useContext } from 'react';
import styles from './ProductCard.module.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import AOTA from "../../../contracts/AOTA.json";
import { setLocalStorage } from '../../../utils';
import { MintContext } from '../../../context/MintContext';



function ProductCard({ }) {
  const [pubPrice, setPubPrice] = useState(0.07);
  const [quantity, setQuantity] = useState(1);
  const { pubMint, priMint, isConnected, hasMetamask, web3, trxHash, checkStatus, status } = useContext(MintContext);

  console.log(trxHash,"HASH++++++++++")
  const statusCheck = async () => {
    await checkStatus();
  }

  useEffect(() => {
    statusCheck();
    status == 0 ? setPubPrice(0.00) : (status == 1 ? setPubPrice(0.07) : setPubPrice(0.09))
  }, [status, web3]);

  return (
    <>
      <div className={styles.card}>
        <h1 className="text-center fs-3">
          {
            status == 0 ? "Sale Closed!" : (status == 1 ? "Private Sale" : "Public Sale")
          }
        </h1>
        <p className="text-center"><a href='https://opensea.io/collection/aota-genesis'>View Collection on OpenSea</a></p>

        <div className={`d-flex justify-content-between flex-wrap flex-row pt-5 ${styles.mobileResp}`}>
          <div className={styles.imageRespn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/gallery/AOTA.gif"
                alt="Gallery Image"
                width={200}
                height={200}
                className='img-fit rounded-3' />
            </div>
          </div>
          <div className={`d-flex flex-column justify-content-center align-items-start mt-2 ${styles.quantityRespon}`}>
            <div className={`d-flex align-items-center ${styles.quantityWrapper}`}>
              <span onClick={() => {
                if (quantity >= 1) {
                  setQuantity(quantity + 1);
                }
              }}><i className="fa-solid fa-plus"></i></span>
              <p className="ml-2">{quantity}</p>
              <span onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}><i className="fa-solid fa-minus"></i></span>
            </div>
            <h5 className='fw-bold mt-3'>Total</h5>
            <h3 className='fw-bold fs-2'> {(quantity * pubPrice)?.toFixed(2)} ETH</h3>
            {isConnected ? (status == 0 ? "Sale Closed" : (status == 1 ? <button className={`btn ${styles.mintBtn}`} onClick={() => priMint(quantity)}>MINT</button> : <button className={`btn ${styles.mintBtn}`} onClick={() => pubMint(quantity)}>MINT</button>)) : "Please connect to Metamask"}
          </div>


        </div>
        <div className="mt-5">
          {/* <button className={`btn ${styles.statusBtn}`}>Status Minting</button> */}
          {/* <p className={styles.statusBar}>{trxHash.slice(0, 30)} <br /> {trxHash.slice(31, 150)}</p> */}
        </div>
      </div></>

  )
}

export default ProductCard