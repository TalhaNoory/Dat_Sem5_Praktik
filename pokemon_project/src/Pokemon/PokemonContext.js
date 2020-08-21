import React, {createContext, useState} from 'react'
import { CAPTURE, RELEASE, ADD_POKEMON } from './PokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const capture = (pokemon) => () => {
        dispatch({type: CAPTURE, pokemon});
    };

    const release = (pokemon) => () => {
        dispatch({type: RELEASE, pokemon});
    };

    const addPokemon = (pokemon) => {
        dispatch({ type: ADD_POKEMON, pokemon });
    };

    const { pokemons, capturedPokemons } = state;

    const providerValue = {
        pokemons,
        capturedPokemons,
        release,
        capture,
        addPokemon
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;