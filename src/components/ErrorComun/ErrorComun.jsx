import React from 'react'
import styles from "../../assets/styles/components/ErrorComun/ErrorComun.module.css";

const ErrorComun = ({style,mensaje}) => {
  return (
    <div className={styles.content}>
      <div className={style ? styles.failed : styles.success}>
        <p className={styles.parrafo}>{mensaje}</p>
      </div>
    </div>
  )
}

export default ErrorComun;
