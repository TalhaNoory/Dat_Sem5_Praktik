import React from 'react'
import PokemonsList from './components/PokemonList'
import Pokedex from './components/Pokedex'
import PokemonProvider from './components/PokemonContext'
import PokemonForm from './components/PokemonForm'

function App() {
  return (
    <PokemonProvider>
      <>
        <PokemonsList />
        <Pokedex />
      </>
      <PokemonForm/>
    </PokemonProvider>
  );
}

export default App;