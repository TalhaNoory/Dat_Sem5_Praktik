import React from 'react'

export default function Pokemon({ pokemon, togglePokemon }) {

    function handlePokemonClick() {
        togglePokemon(pokemon.id)
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={pokemon.complete}
                    onChange={handlePokemonClick} />
                {this.props.pokemon.name}

            </label>
        </div>
    )
}