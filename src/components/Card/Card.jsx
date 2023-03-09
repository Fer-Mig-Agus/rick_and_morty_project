import React from "react";
import styles from "../../assets/styles/components/Card/Card.module.css";

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={styles.content}>
         <button className={styles.button} onClick={()=>{onClose(id)}}>X</button>
         <h2 className={styles.name} >{name}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender} >{gender}</h2>
         <img className={styles.img} src={image} alt="" />
      </div>
   );
}
