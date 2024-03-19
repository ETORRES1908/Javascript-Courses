import React, { useState, useEffect } from 'react';
import getGifs from "../services/getGifs"
import Gif from "./Gif";

export default function ListOfGifs ({ keyword}) {
    const [gifs, setGifs] = useState([]);
    //Array vacio -> []
    //Indica dependencia para el useEffect y hace que el componente se renderice la primera vez
    //Teniendo en cuenta que no se ha colocado dependencia alguna
  useEffect(function () {
    getGifs({keyword}).then(gifs => setGifs(gifs))
  }, [keyword]);
    return (
        gifs.map(({id, title, url}) =>
            <Gif 
            key={id}
            title={title} 
            url={url} 
            id={id}
            />
            )
    )
}