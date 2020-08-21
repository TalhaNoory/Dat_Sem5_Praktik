import React from 'react'

export const Pokemon = ({ pokemon, onClick, buttonLabel}) => {
    <tr key={pokemon.name}>
        <tr><span>{pokemon.name}</span></tr>
        <tr><buttton onClick={onClick(pokemon)}></buttton></tr>
    </tr>
}

export default Pokemon;