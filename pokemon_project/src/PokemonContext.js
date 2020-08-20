import React, {createContext, useState} from 'react'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        {id: 1, name: 'Bulbasaur'},
        {id: 2, name: 'Charmander'},
        {id: 3, name: 'Squirtle'}
    ]);

    const [pokemons, setCapturedPokemons] = state;

    const providerValue = {
        pokemons,
        setPokemons,
        release,
        capture
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    );
}