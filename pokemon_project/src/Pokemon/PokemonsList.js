import React, { useContext, useEffect } from 'react'
import { PokemonContext } from './PokemonContext'

const url = "https://pokeapi.co/api/v2/pokemon"

const PokemonsList = () => {
    const { state, capture, addPokemons } = useContext(PokemonContext);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch(url);
            const data = await response.json();
            addPokemons(data.results)
        };

        fetchPokemons();
    }, [addPokemons])

    return (
        <div className="pokemons-List">
            <h2>Pokemons List</h2>

            {pokemons.map((pokemon) =>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                    <span>{pokemon.name}</span>
                    <button onClick={capture(pokemon)}>+</button>
                </div>)}
        </div>
    )
}

export default PokemonsList;