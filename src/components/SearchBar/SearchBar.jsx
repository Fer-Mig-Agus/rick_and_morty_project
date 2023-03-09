import styles from "../../assets/styles/components/SearchBar/SearchBar.module.css";
import { useState } from "react";


export default function SearchBar({onSearch}) {

   const [id,setId]= useState("");

   const handleChange=(event)=>{
      setId(event.target.value);
      setTimeout(()=>{
         event.target.value="";
      },2000)
   };

   return (
      <div className={styles.content}>
         <input placeholder="Busca aqui del 1 al 826..." className={styles.input} onChange={handleChange} type='search' />

         <button className={styles.button}  onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
