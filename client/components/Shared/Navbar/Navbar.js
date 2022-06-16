import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Navbar.module.css";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";

import AOTA from "../../../contracts/AOTA.json";
import { MintContext } from "./../../../context/MintContext";

function Navbar({ BorderBottom, wallet }) {
  const { connectwallet, disconnectwallet, isConnected, hasMetamask, sign } =
    useContext(MintContext);

  useEffect(() => {}, [isConnected, hasMetamask]);

  return (
    <nav
      className={`navbar navbar-expand-lg fn-montserrat ${
        wallet ? "navbar-light" : "navbar-dark"
      } bg-primary pb-3 ${Styles.navContainer}`}
    >
      <div
        className={`${wallet ? "container" : "container"}  ${
          BorderBottom && Styles.BorderBottom
        }`}
      >
        <Link className="navbar-brand" href="/">
          <Image
            src="/image 8.png"
            width={128}
            height={40}
            className={"img-fluid"}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {wallet ? (
              <>
                <Link href={"/collection"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      Collection
                    </a>
                  </li>
                </Link>
                {sign === "0x0D8444f2d3f93AB117392d461e84D22F2A638C12" && (
                  <Link href={"/withdraw"}>
                    <li className="nav-item ms-md-4">
                      <a
                        className={"nav-link " + Styles.navLink}
                        aria-current="page"
                        href="#"
                      >
                        Admin
                      </a>
                    </li>
                  </Link>
                )}
                <li className="nav-item ms-md-4">
                  <p className="pt-2 fw-bold">{sign}</p>
                </li>
                <li className="nav-item ms-md-4">
                  {isConnected ? (
                    <button
                      className={"btn " + Styles.connectWalletBtn}
                      onClick={() => disconnectwallet()}
                      aria-current="page"
                      href="#"
                    >
                      Disonnect Wallet
                    </button>
                  ) : (
                    <button
                      className={"btn " + Styles.connectWalletBtn}
                      onClick={() => connectwallet()}
                    >
                      Connect Wallet
                    </button>
                  )}
                </li>
              </>
            ) : (
              <>
                <Link href={"/"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                </Link>
                
                <Link href={"/gallery"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      GALLERY
                    </a>
                  </li>
                </Link>
                <Link href={"/roadMap"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      ROAD MAP
                    </a>
                  </li>
                </Link>
                <Link href={"/mainfesto"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      Mainfesto
                    </a>
                  </li>
                </Link>
                <Link href={"/partners"}>
                  <li className="nav-item ms-md-4">
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      The ave
                    </a>
                  </li>
                </Link>
              </>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={"nav-link " + Styles.navLink}>
                <button
                  className={`${Styles.connectWalletBtn}`}
                  onClick={connectwallet}
                >
                  Connect Wallet
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + Styles.socialIcon}
                aria-current="page"
                href="#"
              >
                <i className="fab fa-twitter mt-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + Styles.socialIcon}
                aria-current="page"
                href="#"
              >
                <i className="fab fa-instagram mt-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + Styles.socialIcon}
                aria-current="page"
                href="#"
              >
                <i className="fab fa-discord mt-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;