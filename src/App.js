import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import HeaderNew from "./components/Header/HeaderNew.jsx"
import Nav from "./components/Nav/Nav.jsx";
import {useState} from 'react';
//import characters, { Rick } from './data.js'



function App() {

  const [characters,setCharacters]=useState([]);

  const onSearch=(id)=>{

    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY="d640439ec558.6d012afc549ba6662537";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.name && !characters.find((char)=>char.id === data.id)){
        setCharacters((oldChars)=>[...oldChars,data])
        // setCharacters([...characters,data])
      }else{
        alert("algo salio mal")
      }
    })
  }

  const onClose=(id)=>{
    setCharacters(
      characters.filter((char)=>char.id !== id)
      );
  }



//   function onSearch(character) {
//     fetch(`https://rickandmortyapi.com/api/character/${character}`)
//        .then((response) => response.json())
//        .then((data) => {
//           if (data.name) {
//              setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//              window.alert('No hay personajes con ese ID');
//           }
//        });
//  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
        <HeaderNew />
      </div>
      <div>
      <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App;
