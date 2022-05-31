import React, { useContext } from 'react'
import SliderCard from './SliderCard'
import Carousel from 'react-grid-carousel';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './Header.module.css';
import { MintContext } from './../../../context/MintContext';
import Link from 'next/link';

function Header() {
  const { isConnected, connectwallet } = useContext(MintContext);
  return (
    <div className={styles.headerWrapper}>
      <Navbar />
      <div className={styles.headerContentWrapper}>
        <div className="container">
          <div className="row">
            <div className={`${ styles.headerContent }`}>
              <h1>ALIENS ON <br /> THE AVE</h1>
              {
                isConnected
                  ? (
                    <Link href={'/public-sale'}>
                      <button>MINT</button>
                    </Link>
                  )
                  : (
                    <button onClick={() => connectwallet()}>Connect Wallet</button>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header