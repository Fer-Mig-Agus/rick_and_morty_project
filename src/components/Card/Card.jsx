import React from "react";
import {Link} from "react-router-dom";
import styles from "../../assets/styles/components/Card/Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={styles.content}>

         <div className={`${styles.face} ${styles.front}`}>

            <img className={styles.img} src={image} alt="" />
            
            <h2 className={styles.name} >{name}</h2>
            
         </div>

         <div className={`${styles.face} ${styles.back}`}>
         <button className={styles.button} onClick={() => { onClose(id) }}>X</button>
         <h2 className={styles.species}>Specie: <br/> {species}</h2>
         <Link to={`/detail/${id}`}>
         <h2 className={styles.nameCard} >Nombre:<br/> {name}</h2>
         </Link>
            <h2 className={styles.gender} >Genero:{gender}</h2>
            <h2 className={styles.id} >Id:{id}</h2>
            

         </div>
      </div>
   );
}
