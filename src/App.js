import PokemonContainer from './containers/PokemonContainer';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [allPokemonTypes, setAllPokemonTypes] = useState("")

  useEffect(() => {
    getAllPokemonTypes()
  }, [])

  const getAllPokemonTypes = () => {
    fetch("https://pokeapi.co/api/v2/type/")
    .then(response => response.json())
    .then(pokemonTypesData => setAllPokemonTypes(pokemonTypesData.results))
  }

  return (
    <div className="App">
      <h1>App</h1>
      {allPokemonTypes ? <PokemonContainer allPokemonTypes={allPokemonTypes}/> : null }
    </div>
  );
}

export default App;
