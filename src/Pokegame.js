import React from "react";
import Pokedex from './Pokedex';

function createHand(pokemon) {
    const hand = [];
    for (let i = 0; i < pokemon.length; i++) {
        const idx = Math.floor(Math.random()* pokemon.length);
        if (hand.length < 4) hand.push(pokemon[idx]);   
    }
    return hand;
}

function totalExp(hand){
    return hand.reduce((accum, next) => (accum + next.base_experience
    ),0);
}

const Pokegame = ({pokemon}) => {
    const hand1 = createHand(pokemon);
    const hand2 = createHand(pokemon);
    
    const EXP1 = totalExp(hand1);
    const EXP2 = totalExp(hand2);
    
    let win1;
    let win2;
    if (EXP1 > EXP2) win1 = true;
    else win2 = true;

    return (
        <>
        <Pokedex characters={hand1} EXP={EXP1} isWinner={win1} />
        <Pokedex characters={hand2} EXP={EXP2} isWinner={win2}/>
        </>
    )
}


Pokegame.defaultProps = { 
    pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
  }
  

export default Pokegame;