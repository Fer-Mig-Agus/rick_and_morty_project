import styles from "../../assets/styles/components/SearchBar/SearchBar.module.css";
export default function SearchBar(props) {
   return (
      <div className={styles.content}>
         <input placeholder="Busca aqui..." className={styles.input} type='search' />
         <button className={styles.button}  onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
