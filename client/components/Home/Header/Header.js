import React, { useContext } from 'react'
import SliderCard from './SliderCard'
import Carousel from 'react-grid-carousel';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './Header.module.css';
import { MintContext } from './../../../context/MintContext';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  const { isConnected, connectwallet } = useContext(MintContext);
  return (
    <div className={styles.headerWrapper}>
      <Navbar />
      <div className={styles.headerContentWrapper}>
        <div className="container fn-montserrat">
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5 pb-5">
              <div className={`${ styles.headerContent }`}>
                <h1 className=''>ALIENS ON <br /> THE AVE</h1>
                {
                  isConnected
                    ? (
                      <Link href={'/public-sale'}>
                        <button>MINT</button>
                      </Link>
                    )
                    : (
                      <button onClick={() => connectwallet()}>CONNECT WALLET</button>
                    )
                }
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pt-5 pb-5  d-sm-none d-md-block ">
              <div className="text-center">
                <Image
                  src={'/images/PC.png'}
                  width={700}
                  height={400}
                  className="img-fit img-fluid"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header