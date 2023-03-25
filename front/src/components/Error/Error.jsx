import React from 'react'
import styles from "../../assets/styles/components/Error/Error.module.css"
import image from "../../assets/img/not found.png"

const Error = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Page not found</h1>
      <div className={styles.contentImage}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <h3 className={styles.subTitle}>Error 404</h3>
    </div>
  )
}

export default Error;
