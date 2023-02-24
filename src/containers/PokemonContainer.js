import React, {useState, useEffect} from "react";
import Type from "../components/Type";
import TypeList from "../components/TypeList";

const PokemonContainer = ({allPokemonTypes}) => {

  const [pokemonTypeData, setPokemonTypeData] = useState("")
  // const [selectedPokemonType, setSelectedPokemonType] = useState('')

  // useEffect(() => {
  //   getTypeData(allPokemonTypes[0].url)
  // })

  const getTypeData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(typeUrlData => setPokemonTypeData(typeUrlData))
  }

  // const handleOnClick = (type) => {
  //   setSelectedPokemonType(type);
  // }



  return(
    <div>
      <h2>PokemonContainer</h2>
      <TypeList allPokemonTypes={allPokemonTypes} getTypeData={getTypeData}/>
    </div>
  )
}
export default PokemonContainer;