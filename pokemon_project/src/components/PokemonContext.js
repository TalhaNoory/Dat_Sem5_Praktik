import React, {createContext, useState} from 'react'
import { CAPTURE, RELEASE } from './PokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const capture = (pokemon) => () => {
        dispatch({type: CAPTURE, pokemon});
    };

    const release = (pokemon) => () => {
        dispatch({type: RELEASE, pokemon});
    };

    const { pokemons, setCapturedPokemons } = state;

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

export default PokemonProvider;