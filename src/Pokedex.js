import React from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';


const Pokedex = (props) => {
    const cards = props.characters.map(char => (
        <Pokecard key={char.id} 
                id={char.id} 
                name={char.name} 
                type={char.type}
                base_experience={char.base_experience} />
    ));

    return (
        <>
        <h1 className="pokedex-title">Pokedex</h1>
        <div className="pokedex-body">
            {cards}
        </div>
        <div className="pokedex-points">
            <div><b>Total EXP: </b>{props.EXP}</div>
            <div>{props.isWinner ? "THIS HAND WINS!": ""}</div>
        </div>
        </>
    )
}

export default Pokedex;