import React from "react";

import styles from "../../assets/styles/components/Header/HeaderNew.module.css";


export default function HeaderNew(){
    return(
        <div className={styles.content}>
            <img src="../../assets/img/images.png" className={styles.logo} alt="imagen.png" title="logo" />
        </div>

    );
}

