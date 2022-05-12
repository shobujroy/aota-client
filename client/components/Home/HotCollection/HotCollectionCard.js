import Image from 'next/image'
import React from 'react'
import styles from './HotCollectionCard.module.css'

function HotCollectionCard() {
  return (
    <div className={styles.hotCollectionCard}>
      <Image
        src={`/images/seiderImg.png`}
        width={300}
        height={150}
        className={`img-fit rounded-3`}
      />
      {/* <div className={styles.authorPicWrapper}>
        <Image
          src={`/images/propic.jpg`}
          width={70}
          height={70}
          className={`img-fit rounded-circle z-index-100`}
        />
      </div> */}
      <div className={styles.hotCollectionCardBody}>
        <h5>Abstraction</h5>
        <p>ERC-192</p>
      </div>
    </div>
  )
}

export default HotCollectionCard