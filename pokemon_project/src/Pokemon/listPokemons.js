import React from 'react'
import Pokemon from './Pokemon'

export const listPokemons = ({ pokemons, onClick, buttonsLabel }) =>
    pokemons.map((pokemon) => (
        <Pokemon
            pokemons={pokemon}
            onClick={onClick}
            buttonLabel={buttonsLabel}

        />
    ))