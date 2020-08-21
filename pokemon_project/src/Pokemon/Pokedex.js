import React, { useContext } from 'react'
import { PokemonContext } from './PokemonContext';
import PokemonsList from './PokemonsList'

const Pokedex = () => {
    const { capturedPokemons, release } = useContext(PokemonContext);

    return (
        <div className="Pokedex">
            <h2>Pokedex</h2>

            <table>
                <tr>
                    <th>Pokemon</th>
                    <th>Release</th>
                </tr>
                {PokemonsList({
                    pokemons: capturedPokemons,
                    onClick: release,
                    buttonLabel: '-'
                })}
            </table>
        </div>
    )
}

export default Pokedex;