import React from 'react'
import PokemonOfTypeList from './PokemonOfTypeList'

const TypeDetails = ({pokemonTypeData}) => {
  if(!pokemonTypeData){
    return "Please select a type"
  }

  
  const doubleDamageFrom = pokemonTypeData.damage_relations.double_damage_from.map((detail, index) => {
    return(
      <div key={index}>{detail.name}</div>
    )
  })


  let doubleDamageTo = null;

  if(pokemonTypeData.damage_relations.double_damage_to.length === 0){
    doubleDamageTo = null;
  }else {
    doubleDamageTo = pokemonTypeData.damage_relations.double_damage_to.map((detail, index) => {
      return(
        <div key={index}>{detail.name}</div>
      )
    })
  }
  
  let halfDamageFrom = null;

  if(pokemonTypeData.damage_relations.half_damage_from.length === 0){
    halfDamageFrom = null;
  }else{
    halfDamageFrom = pokemonTypeData.damage_relations.half_damage_from.map((detail, index) => {
    return(
      <div key={index}>{detail.name}</div>
    )
  })
}

  const halfDamageTo = pokemonTypeData.damage_relations.half_damage_to.map((detail, index) => {
    return(
      <div key={index}>{detail.name}</div>
    )
  })

  return (
    <div className='type-details'>
      <h2 className='title'>{pokemonTypeData.name}</h2>
      <h4 className='damage-title'>Double Damage From:</h4> 
      {doubleDamageFrom ? <div className='damage-info'>{doubleDamageFrom}</div> : <div>None</div>}
      <h4 className='damage-title'>Double Damage To:</h4> 
      {doubleDamageTo ? <div className='damage-info'>{doubleDamageTo}</div> : <div>None</div>}
      <h4 className='damage-title'>Half Damage From:</h4> 
      {halfDamageFrom ? <div className='damage-info'>{halfDamageFrom}</div> : <div>None</div>}
      <h4 className='damage-title'>Half Damage To:</h4> 
      {halfDamageTo ? <div className='damage-info'>{halfDamageTo}</div> : <div>None</div>}
      <PokemonOfTypeList pokemonTypeData={pokemonTypeData}/>
    </div>
  )
}

export default TypeDetails


