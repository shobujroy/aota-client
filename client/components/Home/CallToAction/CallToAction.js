import Image from 'next/image'
import React from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <div className='bg-secondary pt-5 pb-5'>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <Image
              src={`/images/calltoaction.png`}
              width={700}
              height={250}
              className={`img-fit rounded-3`}
            />
          </div>
          <div className={"col-md-6 " + styles.subscribeWrapper}>
            <h3>Subscribe to us</h3>
            <p>Specially developed to help restore a more youthful appearance with improved radiance and bounce.</p>
            <div className="d-flex">
              <input type="text" className={`form-control ${ styles.subscribeInput }`}
                placeholder="Your work email address" />
              <button className={`btn ${styles.subscribeBtn}`}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction