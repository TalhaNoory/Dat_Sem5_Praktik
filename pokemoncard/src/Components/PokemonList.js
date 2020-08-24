import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonList({ pokemons, togglePokemon }) {
    return (
        pokemons.map(pokemon => {
            return <Pokemon
                key={pokemon.id}
                togglePokemon={togglePokemon}
                pokemon={pokemon} />
        })
    )
}