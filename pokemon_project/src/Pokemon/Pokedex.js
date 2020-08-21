import React, { useContext } from 'react'
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons'

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
                {listPokemons({
                    pokemons: capturedPokemons,
                    onClick: release,
                    buttonLabel: '-'
                })}
            </table>
        </div>
    )
}

export default Pokedex;