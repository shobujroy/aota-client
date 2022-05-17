import React from 'react'
import SliderCard from './SliderCard'
import Carousel from 'react-grid-carousel';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <Navbar />
      <div className={styles.headerContentWrapper}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${ styles.headerContent }`}>
              <h1>ALIENS ON <br /> THE AVE</h1>
              <button>MINT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header