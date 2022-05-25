import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Styles from './Navbar.module.css';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";

let web3Modal;

const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: "29a4aa8775aa42caace0437559c37bb4"
            }
          }
    };

function Navbar({ BorderBottom, wallet,  isConnected, setIsConnected, hasMetamask, setHasMetamask, sign, setSign}) {

    if (typeof window !== "undefined") {
        web3Modal = new Web3Modal({
          cacheProvider: false,
          providerOptions, // required
        });
      }

    useEffect(() => {
        console.log("isConnected and hasMetamask from useEffect of Navbar");
        console.log(isConnected);
        console.log(hasMetamask);
      }, [hasMetamask, isConnected]);

    async function connectwallet() { 
        if (typeof window.ethereum !== "undefined") {
            try {
              const provider = await web3Modal.connect();
              console.log("provider from connectwallet function in Navbar");
              console.log(provider);
      
              const web3 = new Web3(provider);
              console.log("web3 from connectwallet function in Navbar");
              console.log(web3);
      
              setIsConnected(true);
              console.log("isConnected from connectwallet function in Navbar");
              console.log(isConnected);
      
              setSign((await web3.eth.getAccounts())[0]);
              console.log("sign from connectwallet function in Navbar");
              console.log(sign);
            } catch (e) {
              console.log("error from connectwallet function in Navbar");
              console.log(e);
            }
          } else {
            setIsConnected(false);
            console.log("isConnected from connectwallet function in Navbar");
            console.log(isConnected);
          }
        //var provider = await web3Modal.connect();
        //var web3 = new Web3(provider); 
        //setSign((await web3.eth.getAccounts())[0]);
        //setIsConnected(true);
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
        <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent pb-3 ${ Styles.navContainer }`}>
            <div className={`container  ${ BorderBottom && Styles.BorderBottom }`}>
                <a className="navbar-brand" href="#">
                    <Image
                        src="/LOGO (Black) - V3.svg"
                        width={128}
                        height={40}
                        className={"img-fluid"}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <form className="d-flex ms-md-4">
                        <input className={`form-control me-2 ${ Styles.searchInput }`}
                            type="search"
                            placeholder="search item here..."
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            wallet
                                ? (
                                    <>
                                        <li className="nav-item ms-md-5">
                                            <p className='mt-1 fw-bold'>{sign}</p>
                                        </li>
                                        <li className="nav-item ms-md-4">
                                        {hasMetamask ? (isConnected ? (<button className={"btn " + Styles.connectWalletBtn} onClick={() => disconnectwallet()} aria-current="page" href="#">Disonnect Wallet</button>) 
                                        : (<button className={"btn " + Styles.connectWalletBtn} onClick={() => connectwallet()} aria-current="page" href="#">Connect Wallet</button>)) 
                                        : (<button className={"btn " + Styles.connectWalletBtn} onClick={() => connectwallet()} aria-current="page" href="#">Connect Wallet</button>)}
                                        </li>
                                    </>
                                )
                                : (
                                    <>
                                        {/* <Link href={'/'}>
                            <li className="nav-item ms-md-5">
                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">Home</a>
                            </li>
                        </Link> */}
                                        <Link href={'/about'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">ABOUT</a>
                                            </li>
                                        </Link>
                                        <Link href={'/about'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">UTILITY</a>
                                            </li>
                                        </Link>
                                        <Link href={'/about'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">ROAD MAP</a>
                                            </li>
                                        </Link>
                                        <Link href={'/contact'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">GALLERY</a>
                                            </li>
                                        </Link>
                                        <Link href={'/contact'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">TEAM</a>
                                            </li>
                                        </Link>
                                        <Link href={'/contact'}>
                                            <li className="nav-item ms-md-5">
                                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">PARTNERS</a>
                                            </li>
                                        </Link>
                                        {/* <Link href={'/contact'}>
                            <li className="nav-item ms-md-5">
                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">Contact</a>
                            </li>
                        </Link> */}
                                        {/* <li className="nav-item ms-md-5 d-flex align-items-center justify-content-end">
                            <button className={"btn " + Styles.connectWalletBtn} aria-current="page" href="#">Connect Wallet</button>
                        </li> */}
                                    </>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar