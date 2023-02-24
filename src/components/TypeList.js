import React from 'react'
import Type from './Type'

const TypeList = ({allPokemonTypes, getTypeData}) => {

  const typeNameNodes = allPokemonTypes.map((type, index) => {
    return(
      <Type getTypeData={getTypeData} name={type.name} key={index} url={type.url}/>
    )
  })


  return (
    <div>
      <h2>TypeList</h2>
      <ul>
        {typeNameNodes}
      </ul>
    </div>
  )
}

export default TypeList
