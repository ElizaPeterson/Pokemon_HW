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
      <ul className="type-list">
        {typeNameNodes}
      </ul>
    </div>
  )
}

export default TypeList
