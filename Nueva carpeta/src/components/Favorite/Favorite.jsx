
import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from "../../assets/styles/components/Favorite/Favorite.module.css";
import { filterCards, orderCards, allFavorites } from "../../redux/actions";
// import { mapDispatchToProps, mapStateToProps } from "react-redux";


const Favorite = () => {

  const favorites = useSelector(state => state.allCharacters);

  

  

  const dispatch = useDispatch();

  const [orderCard, setOrderCard] = useState("Ascendente");

  const handleChangeOrder = (event) => {

    const value = event.target.value;

    console.log(value)

    if (value === "Ascendente") {

      setOrderCard("Descendente");
    } else {

      setOrderCard("Ascendente");
    }

  }


  const [filterCard, setFilterCard] = useState("All");

  const handleChangeFilter = (event) => {

    const value = event.target.value;

    console.log(value);
    switch (value) {
      case "All":
        return setFilterCard("All");
      case "Male":
        return setFilterCard("Male");
      case "Female":
        return setFilterCard("Female");
      case "Genderless":
        return setFilterCard("Genderless");
      case "unknown":
        return setFilterCard("unknown");
      default: 
        return setFilterCard("All");
    }
  }
  useEffect(()=>{

  },[favorites]);

  useEffect(() => {
    dispatch(allFavorites());
    dispatch(filterCards(filterCard))
  }, [filterCard])




  useEffect(() => {
    dispatch(orderCards(orderCard))
  }, [orderCard]);


  /*
  masculino=male: 1,2
  femenino=female: 3,4 
  desconocido-unknown: 13,
  genderless-sin genero: 
  */



  return (
    <div>
      <h1 className={styles.title}>Mis favoritos</h1>
      <div className={styles.contentOption}>

        <select name="" id="" className={styles.optionOrder} onClick={handleChangeOrder}  >

          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>

        </select>

        <select name="" id="" className={styles.optionGender} onClick={handleChangeFilter} >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>

        </select>

      </div>
      <div className={styles.contentCard}>
        {favorites.map(({ id, name, species, gender, image }) => {
          return <Card key={id} id={id} name={name} species={species} gender={gender} image={image} />
        })}
      </div>
    </div>
  )
}
export default Favorite;

// export const mapStateToProps=(state)=>{
//   return{
//     favorites:state.myFavorites
//   }
// }

// export const mapDispatchToProps=(dispatch)=>{
//   return{
//     orderCards:()=>{
//       dispatch(orderCards());
//     }
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
