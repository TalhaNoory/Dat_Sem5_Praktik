import React from 'react'
import PokemonsList from './PokemonList'
import Pokedex from './Pokedex'
import PokemonProvider from './PokemonContext'

function App() {
  return (
    <PokemonProvider>
      <>
        <PokemonsList />
        <Pokedex />
      </>
    </PokemonProvider>
  );
}

export default App;
