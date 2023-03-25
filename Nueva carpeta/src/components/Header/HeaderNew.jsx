import React from "react";

import styles from "../../assets/styles/components/Header/HeaderNew.module.css";
import imagen from "../../assets/img/Rick-and-Morty.png";

export default function HeaderNew(){
    return(
        <>
        <div className={styles.content}>
            <img src={imagen} className={styles.logo} alt="imagen.png" title="logo" />
        </div>
        
        </>
        

    );
}

