import React from 'react'
import styles from './CommonHeader.module.css';

function CommonHeader({ title }) {
  return (
    <div>
      <div className={styles.commonHeaderWrapper}>
        <h5>
          {title}
        </h5>
      </div>
    </div>
  )
}

export default CommonHeader