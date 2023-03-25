import './App.css'
import { useState,useEffect } from 'react';
import Nav from "./components/Nav/Nav.jsx";
import Error from "./components/Error/Error.jsx"
import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import InicioMain from "./views/InicioMain.jsx"
import AboutMain from "./views/AboutMain.jsx"
import HomeMain from "./views/HomeMain.jsx"
import FavoriteMain from './views/FavoriteMain';
import ErrorComun from './components/ErrorComun/ErrorComun';



import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import characters, { Rick } from './data.js'



function App() {

  const { pathname } = useLocation();

  
  const access=useSelector(state=>state.access);

  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  const [characters, setCharacters] = useState([]);


  //important: descomentar despues
  const verificarRuta = () => {
    
    switch (pathname) {
      case "/": return false
      case "/home": return true
      case "/about": return true
      case "/favorite": return true
      case "//detail/:detailId": return false
      default: return false;
    }
  }

  const [alerta, setAlerta] = useState({});




  const onSearch = (id) => {
    

    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "d640439ec558.6d012afc549ba6662537";
    if (characters.find((char) => char.id === id)) {

      setAlerta({ error: true, mensaje: "Personaje Repetido" })
      setTimeout(() => {
        setAlerta({})
      }, 2000)

      return

    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data])
          // setCharacters([...characters,data])
        } else {

          setAlerta({ error: true, mensaje: "Fuera del limite" })
          setTimeout(() => {
            setAlerta({})
          }, 2000)
          return

        }
      })
  }

  const { mensaje, error } = alerta;


  return (



    <div >


      {
        mensaje && <ErrorComun mensaje={mensaje} style={error} />
      }

      {/* <div><Nav onSearch={onSearch}/></div> */}

      {/*Esto hay que descomentar cuando se haga el login completamente */}

      {
        verificarRuta() && <Nav onSearch={onSearch} />
      }
      {/* 
      {
        pathname !== "/" && <Nav onSearch={onSearch} />
      } */}





      <Routes>
        <Route path='/' element={<InicioMain />} />

        <Route path='/home' element={
          <HomeMain characters={characters} setCharacters={setCharacters} />
        } />
        <Route path='/favorite' element={<FavoriteMain />} />
        <Route path='/about' element={<AboutMain />} />

        <Route path='//detail/:detailId' element={<Detail />} />

        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App;
