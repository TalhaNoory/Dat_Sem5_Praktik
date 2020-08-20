import React, { useState } from 'react'

const Pokedex = () => {
    const [pokemons] = useState([])

    return (
        <div className="Pokedex">
            <h2>Captured Pokemons</h2>

            {pokemons.map((pokemon) =>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                    <p>{pokemon.id}</p>
                    <p>{pokemon.name}</p>
                </div>)}
        </div>
    )
}

export default Pokedex;