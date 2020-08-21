import React, { useContext } from 'react'
import { PokemonContext } from './PokemonContext';

const Pokedex = () => {
    const { capturedPokemons, release } = useContext(PokemonContext);

    return (
        <div className="Pokedex">
            <h2>Pokedex</h2>

            {capturedPokemons.map((pokemon) =>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                    <span>{pokemon.name}</span>
                    <button onClick={release(pokemon)}>-</button>
                </div>)}
        </div>
    )
}

export default Pokedex;