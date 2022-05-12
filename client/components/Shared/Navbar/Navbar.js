import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent pt-5 pb-3 ${ Styles.navContainer }`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image
                        src="/logo.svg"
                        width={200}
                        height={70}
                        className={"img-fluid text-danger"}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-md-4">
                        <input className={`form-control me-2 ${ Styles.searchInput }`}
                            type="search"
                            placeholder="search item here..."
                            aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link href={'/'}>
                            <li className="nav-item ms-md-5">
                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link href={'/about'}>
                            <li className="nav-item ms-md-5">
                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">About Us</a>
                            </li>
                        </Link>
                        <Link href={'/contact'}>
                            <li className="nav-item ms-md-5">
                                <a className={"nav-link " + Styles.navLink} aria-current="page" href="#">Contact</a>
                            </li>
                        </Link>
                        <li className="nav-item ms-md-5 d-flex align-items-center justify-content-end">
                            <button className={"btn " + Styles.connectWalletBtn} aria-current="page" href="#">Connect Wallet</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar