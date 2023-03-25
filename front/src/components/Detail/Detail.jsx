
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"


function Detail() {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE="http://localhost:3001/rickandmorty";
        // const URL_BASE = "https://be-a-rym.up.railway.app/api";
        // const KEY = "d640439ec558.6d012afc549ba6662537";

        fetch(`${URL_BASE}/detail/${detailId}`)
            .then((response) => response.json())
            .then((data) => {
                (data.name) ? setCharacter(data) : alert("No esta el ID")
            })

        //important: Porque no funciona
        // axios(`${URL_BASE}/character/${detailId}?Key=${KEY}`)
        //document: .then((response) => setCharacter(response.data))
        // .then((data) => {
        //             (data.name) ? setCharacter(data) : alert("No esta el ID")
        //         })

    }, []);

    return (
        <div>
            <h1>Bievenido a los detalles</h1>
            <Link to="/home"><h3 >Volver</h3></Link>
            
            {
                character.name ?
                    (<>
                        <h2>{character.name}</h2>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                        <p>{character.origin?.name}</p>
                        <img src={character.image} alt="img" />
                    </>)

                    : <h3>Loading...</h3>
            }
        </div>
    );
}

export default Detail;
