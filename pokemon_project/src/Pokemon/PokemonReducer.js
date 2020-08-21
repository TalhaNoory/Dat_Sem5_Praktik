import { useReducer } from 'react'
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions'

// Release function
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
    capturedPokemons.filter(pokemon => pokemon !== releasedPokemon);

const releasedPokemon = (releasedPokemon, state) => ({
    peokmons: [...state.pokemons, releasedPokemon],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});

// Capture function
const getPokemonsList = (pokemons, capturedPokemon) =>
    pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
    pokemons: getPokemonsList(state, pokemon),
    capturedPokemons: [...state.capturedPokemons, pokemon]
});

const addPokemon = (pokemon, state) => ({
    pokemons: [...state.pokemons, pokemon],
    capturedPokemon: state.capturedPokemons
});

const addPokemons = (pokemons, state) => ({
    pokemons: pokemon,
    capturedPokemons: state.capturedPokemons
})

const pokemonReducer = (state, action) => { //Returns the neww state based on the action type
    switch (action.type) {
        case CAPTURE:
            // handle capture and return new state
            return capturePokemon(action.pokemon, state)
        case RELEASE:
            // handle release and return new state
            return releasedPokemon(action.pokemon, state)
        case ADD_POKEMON:
            // handle add 1 pokemon and return new state
            return addPokemon(action.pokemon, state)
        case ADD_POKEMONS:
            // handle add multiple pokemon and return new state
            return addPokemons(action.pokemon, state)
        default:
            return state
    }
}

export const usePokemonReducer = () =>
    useReducer(pokemonReducer, {
        pokemons: [],
        capturedPokemons: []
    })
