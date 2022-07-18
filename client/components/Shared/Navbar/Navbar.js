import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Navbar.module.css";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AOTA from "../../../contracts/AOTA.json";
import { MintContext } from "./../../../context/MintContext";

function Navbar({ BorderBottom, wallet }) {
  const { connectwallet, disconnectwallet, isConnected, hasMetamask, sign } =
    useContext(MintContext);

  useEffect(() => { }, [isConnected, hasMetamask]);
  const router = useRouter();
  const [active, setActive] = useState(null);
  return (
    <nav
      style={{ display: "block", padding: "20px 20px" }}
      className={`navbar navbar-expand-lg fn-Montserrat-Regular ${wallet ? "navbar-light" : "navbar-dark"
        } bg-primary pb-3`}
    >
      <div className={`${wallet}  ${BorderBottom && Styles.BorderBottom}`}>
        <div className={Styles.MobileLogoButton}>
          <Link className={`navbar-brand ${Styles.MobileNabImage}`} href="/">
            <Image
              src="/image 8.png"
              width={100}
              height={20}
              className={`img-fluid`}
            />
          </Link>

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
                    <li className="nav-item ms-md-4 " >
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
                  <p className="pt-2 fw-bold" style={{ overflow: "hidden", wordWrap: "break-word", marginRight: "8px" }}>{sign}</p>
                </li>
                <li className="nav-item ms-md-4">
                  {isConnected && (
                    <button
                      className={"btn " + Styles.connectWalletBtn}
                      onClick={() => disconnectwallet()}
                      aria-current="page"
                      href="#"
                    >
                      Disconnect Wallet
                    </button>
                  )
                    // : (
                    //   <button
                    //     className={"btn " + Styles.connectWalletBtn}
                    //     onClick={() => connectwallet()}
                    //   >
                    //     Connect Wallet
                    //   </button>
                    // )
                  }
                </li>
              </>
            ) : (
              <>
                <Link className={"navbar-brand"} href="/">
                  <div className={Styles.LogoImage}>
                    <Image src="/image 8.png" layout="fill" objectFit="cover" />
                  </div>
                </Link>

                <div className={Styles.menuAll}>
                  <Link href={"/gallery"}>
                    <li className={`nav-item ms-md-4 ${Styles.Muneleft}`}>
                      <a
                        className={
                          router.pathname == "/gallery"
                            ? Styles.navLinkActive
                            : "nav-link " + Styles.navLink
                        }
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
                        className={
                          router.pathname == "/roadMap"
                            ? Styles.navLinkActive
                            : "nav-link " + Styles.navLink
                        }
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
                        className={
                          router.pathname == "/mainfesto"
                            ? Styles.navLinkActive
                            : "nav-link " + Styles.navLink
                        }
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
                        className={
                          router.pathname == "/partners"
                            ? Styles.navLinkActive
                            : "nav-link " + Styles.navLink
                        }
                        aria-current="page"
                        href="#"
                      >
                        The ave
                      </a>
                    </li>
                  </Link>
                </div>
              </>
            )}
          </ul>
          <ul className={`navbar-nav ml-auto $`}>
            <div className={Styles.SocailMedIcon}>
              <li className="nav-item">
                <a
                  onMouseOver={() => setActive(0)}
                  onMouseOut={() => setActive(null)}
                  className={"nav-link " + Styles.socialIcon}
                  aria-current="page"
                  href="http://instagram.com/aliensontheave"
                  target="_blank"
                >
                  {active === 0 ? (
                    <Image
                      src="/images/navbar/instagram.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/images/icons/instagram.svg"
                      width={24}
                      height={24}
                    />
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a
                  onMouseOver={() => setActive(1)}
                  onMouseOut={() => setActive(null)}
                  className={"nav-link " + Styles.socialIcon}
                  aria-current="page"
                  href="https://discord.gg/xpsqJdKkZd"
                  target="_blank"
                >
                  {active === 1 ? (
                    <Image
                      src="/images/navbar/Discord.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/images/icons/Discord.svg"
                      width={24}
                      height={24}
                    />
                  )}
                </a>
              </li>

              <li className="nav-item">
                <a
                  onMouseOver={() => setActive(2)}
                  onMouseOut={() => setActive(null)}
                  className={"nav-link " + Styles.socialIcon}
                  aria-current="page"
                  href="http://twitter.com/AOTAnft/"
                  target="_blank"
                >
                  {active === 2 ? (
                    <Image
                      src="/images/navbar/twitter.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/images/icons/twitter.svg"
                      width={24}
                      height={24}
                    />
                  )}
                </a>
              </li>

              <li className="nav-item">
                <a
                  onMouseOver={() => setActive(3)}
                  onMouseOut={() => setActive(null)}
                  className={"nav-link " + Styles.socialIcon}
                  aria-current="page"
                  href="http://opensea.io/Aliensontheave/"
                  target="_blank"
                >
                  {active === 3 ? (
                    <Image
                      src="/images/navbar/opensea 1.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/images/icons/opensea 2.svg"
                      width={24}
                      height={24}
                    />
                  )}
                </a>
              </li>
            </div>

            {/* <button
              className={`${Styles.MobileButton}`}
              onClick={connectwallet}
            >
              {isConnected ? "Mint" : "Connect Wallet"}
            </button> */}

            <li className="nav-item">
              <a className={"nav-link " + Styles.navLinkTooo}>
                {isConnected ? (
                  <Link href={"/public-sale"}>
<<<<<<< HEAD
                    <button className={`${Styles.connectWalletBtns}`}>
=======
                    <button className={`${Styles.connectWalletBtnS}`}>
>>>>>>> 7fa746ddbd74b559110199d39a074573c67a94dd
                      MINT
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => connectwallet()}
<<<<<<< HEAD
                    className={`${Styles.connectWalletBtns}`}
=======
                    className={`${Styles.connectWalletBtnS}`}
>>>>>>> 7fa746ddbd74b559110199d39a074573c67a94dd
                  >
                    CONNECT WALLET
                  </button>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
