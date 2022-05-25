import React from 'react'
import ProductCard from './../components/PublicSale/ProductCard/ProductCard';
import styles from '../styles/withdraw.module.css';
import WithDraw from './withdraw';
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';
import Image from 'next/image';
function withdraw() {
  return (
    <div className='bg-third'>
      <Navbar BorderBottom={true} />
      <div className="container pt-3 pb-5">
        <div className="row">
          <div className='mt-3 d-flex justify-content-center'>
            <div className={styles.card}>
              <h1 className="text-center fs-3">Admin Pannel</h1>
              <p className="text-center">0xd260.....96b4</p>

              <div className='text-center pt-5'>
                <button className={`btn ${ styles.mintBtn }`}>Reserve Mint</button>
                <br />
                <button className={`btn ${ styles.withdrawBtn } mt-3`}>Withdraw Fund</button>
              </div>
              <div className="mt-5">
                <p className={styles.statusBar}>Status.....minting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer bg={'footer-bg-secondary'} />
    </div>
  )
}

export default withdraw