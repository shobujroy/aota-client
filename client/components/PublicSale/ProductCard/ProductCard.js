import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard() {
    return (
        <div className={styles.card}>
            <h1 className="text-center fs-3">Public Sale</h1>
            <p className="text-center">0xd260.....96b4</p>

            <div className='d-flex justify-content-between flex-row pt-5'>
                <div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/gallery/3.PNG"
                            alt="Gallery Image"
                            width={200}
                            height={200}
                            className='img-fit rounded-3'
                        />
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-start ps-5'>
                    <div className={`d-flex align-items-center ${ styles.quantityWrapper }`}>
                        <span><i class="fa-solid fa-plus"></i></span>
                        <p className="ml-2">2</p>
                        <span><i class="fa-solid fa-minus"></i></span>
                    </div>
                    <h5 className='fw-bold mt-3'>Total</h5>
                    <h3 className='fw-bold fs-2'>0.46 ETH</h3>
                    <button className={`btn ${ styles.mintBtn }`}>MINT</button>
                </div>
            </div>
            <div className="mt-5">
                <p className={styles.statusBar}>Status.....minting</p>
            </div>
        </div>
    )
}

export default ProductCard