import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import HeaderNew from "./components/Header/HeaderNew.jsx"
import Nav from "./components/Nav/Nav.jsx";
import {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
//import characters, { Rick } from './data.js'



function App() {

  const [characters,setCharacters]=useState([]);

  const onSearch=(id)=>{

    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY="d640439ec558.6d012afc549ba6662537";
    if(characters.find((char)=>char.id === id)){
      return alert("Personaje Repetido");
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.name ){
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



{/* <Nav /> debe que aparecer en todas las rutas.
<Cards /> debe aparecer sólo en la ruta /home.
<About /> debe aparecer sólo en la ruta /about.
<Detail /> debe aparecer sólo en la ruta /detail/:detailId */}
  return (

    
    <div >
      <div><Nav onSearch={onSearch}/></div>
      
      
      <Routes>
      <Route path='/' element={<HeaderNew/>}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
      <Route path='/about' element={<About />} />    
      <Route path='//detail/:detailId' element={<Detail />} />
        
        
          
        
      </Routes>
      
    </div>
  )
}

export default App;
