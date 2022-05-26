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
  const { pubMint, isConnected, hasMetamask, sign, trxHash } = useContext(MintContext);


  return (
    <><div>

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
            <h3 className='fw-bold fs-2'> {quantity * pubPrice} ETH</h3>
            {isConnected ? <button className={`btn ${ styles.mintBtn }`} onClick={() => pubMint(quantity)}>MINT</button>
              : "Please connect wallet"}
          </div>
        </div>
        <div className="mt-5">
          <p className={styles.statusBar}>{trxHash}</p>
        </div>
      </div></>

  )
}

export default ProductCard