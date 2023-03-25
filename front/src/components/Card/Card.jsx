import React from "react";
import { Form, Link,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, removeFavorite } from "../../redux/actions.js";
import styles from "../../assets/styles/components/Card/Card.module.css";
import {connect} from "react-redux"

 function Card({ id, name, species, gender, image, onClose,addFavorite,removeFavorite ,myFavorites}) {


   //const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);
   const {pathname}=useLocation();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ 
            id,
            name,
            species,
            gender,
            image,
            onClose,

         });
      }
   }


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

 

   return (
      <div className={styles.content}>


        
         <div className={`${styles.face} ${styles.front}`}>

            <img className={styles.img} src={image} alt="" />

            <h2 className={styles.name} >{name}</h2>

         </div>

         <div className={`${styles.face} ${styles.back}`}>
         {
            isFav ? (
               <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.favorite} onClick={handleFavorite}>🤍</button>
            )
         }
         {
            pathname !== "/favorite" && <button className={styles.button} onClick={() => { onClose(id) }}>X</button>
         }
            
            <h2 className={styles.species}>Specie: <br /> {species}</h2>
            <Link to={`/detail/${id}`}>
               <h2 className={styles.nameCard} >Nombre:<br /> {name}</h2>
            </Link>
            <h2 className={styles.gender} >Genero:{gender}</h2>
            <h2 className={styles.id} >Id:{id}</h2>


         </div>
      </div>
   );
}

const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites,
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{
         dispatch(addFavorite(character));
      },
      removeFavorite:(id)=>{
         dispatch(removeFavorite(id))
      }
   }   

}


export default connect(mapStateToProps,mapDispatchToProps)(Card);