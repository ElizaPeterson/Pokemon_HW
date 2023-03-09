import React from 'react';
import PokemonOfType from './PokemonOfType';

const PokemonOfTypeList = ({pokemonTypeData}) => {

  const pokemonOfType = pokemonTypeData.pokemon.map((pokemon, index) => {
    return(
      <div key={index}>
        {pokemon.pokemon.name}
      </div>
    )
  })

  const handleClick = function(){
    console.log("clicked")
    return <PokemonOfType pokemonTypeData={pokemonTypeData}/>
  }

  return (
    <div>
    <h2 onClick={handleClick}>Pokemon of this type</h2>
    {pokemonOfType}
    </div>
  )
}

export default PokemonOfTypeList
