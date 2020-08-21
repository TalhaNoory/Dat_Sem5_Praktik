import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-Pokemons'
import { Pokemon } from '../Components/Pokemon'

export function PokemonsContainer() {
    // Here we either get data back or errors back, or you have can get back!
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {first: 9},
    })

    return (
        <div className="pokemons">
            {pokemons && pokemons.map(pokemon => 
            <Pokemon 
            key={pokemon.id} 
            pokemon={pokemon} 
            />)}
        </div>
    )
}

// Here we loop through all the pokemons
// This contains all my Pokemons
