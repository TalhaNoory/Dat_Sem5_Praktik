import React, { useState } from 'react'

const PokemonsList = () => {
    const [pokemons] = useState([])

    return (
        <div className="pokemons-List">
            <h2>Pokemons List</h2>

            {pokemons.map((pokemon) =>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                    <p>{pokemon.id}</p>
                    <p>{pokemon.name}</p>
                </div>)}
        </div>
    )
}

export default PokemonsList;