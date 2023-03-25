import Card from '../Card/Card';
import styles from "../../assets/styles/components/Cards/Cards.module.css";

export default function Cards({characters,onClose}) {

   
   
   return(
      <>
      
      <h1 className={styles.titulo}>Todos los personajes </h1>
      <div className={characters.length? styles.contentCard : styles.contentNada}>
      {
      characters.length ? (
         characters.map(({id,name,species,gender,image})=>{
         return <Card key={id} id={id} name={name} species={species} gender={gender} image={image} onClose={onClose} />
      })
      ) : (
         <p className={styles.parrafo}>No hay personajes agregados...</p>
      )
      }
      </div>;
      </>
   );
}
