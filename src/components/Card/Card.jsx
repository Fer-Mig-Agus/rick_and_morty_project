import React from "react";
import styles from "../../assets/styles/components/Card/Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.content}>
         <button className={styles.button} onClick={props.onClose}>X</button>
         <h2 className={styles.name} >{props.name}</h2>
         <h2 className={styles.species}>{props.species}</h2>
         <h2 className={styles.gender} >{props.gender}</h2>
         <img className={styles.img} src={props.image} alt="" />
      </div>
   );
}
