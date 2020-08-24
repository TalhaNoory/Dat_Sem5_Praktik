import React, { useState, useRef, useEffect } from 'react';
import PokemonList from './Components/PokemonList'
// import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'pokemonApp.pokemons'

function App() {

  const [pokemons, setPokemons] = useState([])
  const pokemonNameRef = useRef();

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedPokemons) setPokemons(storedPokemons)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pokemons))
  }, [pokemons])

  function togglePokemon(id) {
    const newPokemons = [...pokemons]
    const pokemon = newPokemons.find(pokemon => pokemon.id === id)
    pokemon.comeplete = !pokemon.comeplete
    setPokemons(newPokemons)
  }

  function handleAddPokemon(p) {
    const name = pokemonNameRef.current.value
    if (name === '') return
    setPokemons(prevPokemons => {
      return [...prevPokemons, {id: 1, name: name, comeplete: false}]
    })
    pokemonNameRef.current.value = null
  }

  function handleClearPokemons() {
    const newPokemons = pokemons.filter(pokemon => !pokemon.comeplete)
    setPokemons(newPokemons)
  }

  return (
    <div>
      <PokemonList pokemons={pokemons} togglePokemon={togglePokemon} />
      <input ref={pokemonNameRef} type='text' />
      <button onClick={handleAddPokemon}>Add Pokemon</button>
      <button onClick={handleClearPokemons}>Clear Complete</button>
      <p>Pokemons you've found total [{pokemons.filter(pokemon => !pokemon.comeplete).length}]</p>
    </div>
  );
}

export default App;
