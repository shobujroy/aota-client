import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent pb-3 ${ Styles.navContainer }`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image
                        src="/logo.png"
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar