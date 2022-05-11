import React from 'react';
import styles from './NewItemCard.module.css';
import Image from 'next/image'

function NewItemCard() {
  return (
    <div style={{ width: '18rem' }} className={styles.newItemCard}>
      <div>
        <div className="ms-2">
          <Image
            src="/images/propic.jpg"
            width={50}
            height={50}
            className={`img-fit rounded-circle z-index-100`}
          />
        </div>
        <div className={`${ styles.newItemCardImg }`}>
          <Image
            src={`/images/seiderImg.png`}
            width={300}
            height={300}
            className={`img-fit rounded-3`}
          />
        </div>
      </div>
      <div className={styles.newItemCardBody}>
        <div className={styles.newItemCardTitleWrapper}>
          <h5>Item</h5>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className={styles.newItemCardDesc}>
          <h5>0.08 ETH <span>1/20</span></h5>
        </div>
        <div className={styles.newItemCardActionsBTNWrapper}>
          <h5>Place a bid</h5>
          <h4>
            <i className="fa-solid fa-heart me-2"></i>
            <span>80</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default NewItemCard