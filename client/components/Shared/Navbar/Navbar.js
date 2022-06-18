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
      style={{ display: "block", padding: "20px 20px" }}
      className={`navbar navbar-expand-lg fn-montserrat ${
        wallet ? "navbar-light" : "navbar-dark"
      } bg-primary pb-3`}
    >
      <div className={`${wallet}  ${BorderBottom && Styles.BorderBottom}`}>
        <div className={Styles.MobileLogoButton}>
          <button
            className={`navbar-toggler ${Styles.MobileNabButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Image
              src={"/image/Menu (2 lines).svg"}
              width={20}
              height={15}
              className="navbar-toggler-icon text-white"
            />
          </button>

          <Link className={`navbar-brand ${Styles.MobileNabImage}`} href="/">
            <Image
              src="/image 8.png"
              width={100}
              height={20}
              className={`img-fluid`}
            />
          </Link>

          <button className={`${Styles.MobileButton}`} onClick={connectwallet}>
            Connect Wallet
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${Styles.NavbarItam}`}
          id="navbarSupportedContent"
        >
          {/* <form className="d-flex ms-md-4">
                        <input className={`form-control me-2 ${ Styles.searchInput }`}
                            type="search"
                            placeholder="search item here..."
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
          <ul
            style={{ lineHeight: "40px" }}
            className="navbar-nav me-auto mb-2 mb-lg-0"
          >
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
                <Link className={"navbar-brand"} href="/">
                <div className={Styles.LogoImage}>
                  <Image
                    src="/image 8.png"
                    layout="fill"
                    objectFit="cover"                    
                  />
                </div>
                </Link>

                {/* <Link href={"/"}>
                  <li className={`nav-item ms-md-4 ${Styles.Muneleft}`}>
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                </Link> */}

                <Link href={"/gallery"}>
                  <li className={`nav-item ms-md-4 ${Styles.Muneleft}`}>
                    <a
                      className={"nav-link " + Styles.navLink}
                      aria-current="page"
                      href="#"
                    >
                      Gallery
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
                      Roadmap
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
          <ul className={`navbar-nav ml-auto $`}>
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
            <div className={Styles.SocailMedIcon}>
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
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
