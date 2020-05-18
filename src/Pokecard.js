import React from "react";
import './Pokecard.css';

const Pokecard = ({id, name, type, base_experience}) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="pokecard">
            <h3 className="pokecard-title">{name}</h3>
            <img src={imgSrc}></img>
            <div><b>Type:</b> {type}</div>
            <div><b>EXP:</b>{base_experience}</div>
        </div> 
    )
}

export default Pokecard;