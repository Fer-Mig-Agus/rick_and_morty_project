import React from 'react'
import Cards from "../components/Cards/Cards.jsx"

const HomeMain = ({characters,setCharacters}) => {

  const onClose=(id)=>{
    setCharacters(
      characters.filter((char)=>char.id !== id)
      );
  }


  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default HomeMain
