import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Styles from "./Navbar.module.css";

import { MintContext } from "./../../../context/MintContext";

function Navbar({ BorderBottom, wallet }) {
  const { connectwallet, disconnectwallet, isConnected, hasMetamask, sign } =
    useContext(MintContext);

  useEffect(() => { }, [isConnected, hasMetamask]);
  const router = useRouter();
  const [active, setActive] = useState(null);
  return (
    <nav
      style={{ display: "block", padding: "20px 20px 0px" }}
      className={`navbar navbar-expand-lg fn-Montserrat-Regular ${wallet ? "navbar-light" : "navbar-dark"
        } bg-primary`}
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
            className={`navbar-toggler collapsed ${Styles.MobileNabButton}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <Image
              src={"/image/Menu (2 lines).svg"}
              width={20}
              height={15}
              className="navbar-toggler-icon text-white"
            /> */}
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
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
                {sign === "0xC506dB1beb6555B1b887AD2aC518d9676Fa95e6b" && (
                  <Link href={"/admin"}>
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
                  {isConnected &&
                    <p className="pt-2 fw-bold" style={{ overflow: "hidden", wordWrap: "break-word", marginRight: "8px" }}> {sign?.slice(0, 4)}...{sign?.slice(-4)} </p>
                  }
                </li>
                <li className="nav-item ms-md-4">
                  {isConnected && (
                    <button
                      className={"btn " + Styles.disWalletBtn}
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
                  <Link href={"/roadmap"}>
                    <li className="nav-item ms-md-4">
                      <a
                        className={
                          router.pathname == "/roadmap"
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
                  <Link href={"/manifesto"}>
                    <li className="nav-item ms-md-4">
                      <a
                        className={
                          router.pathname == "/manifesto"
                            ? Styles.navLinkActive
                            : "nav-link " + Styles.navLink
                        }
                        aria-current="page"
                        href="#"
                      >
                        Manifesto
                      </a>
                    </li>
                  </Link>
                  <Link href={"/the-ave"}>
                    <li className="nav-item ms-md-4">
                      <a
                        className={
                          router.pathname == "/the-ave"
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
                      src="/images/navbar/insta Yellow.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/images/navbar/insta gray.svg"
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
                      src="/images/navbar/Discord 2.svg"
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
                    <button className={`${Styles.connectWalletBtnS}`}>
                      MINT
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => connectwallet()}
                    className={`${Styles.connectWalletBtnS}`}
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
