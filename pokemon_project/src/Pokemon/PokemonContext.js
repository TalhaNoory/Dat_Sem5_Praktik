import React, {createContext} from 'react'
import { usePokemonReducer } from './usePokemonReducer'
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {

    const [state, dispatch] = usePokemonReducer();
    const { pokemons, capturedPokemons } = state 

    const capture = (pokemon) => dispatch({type: CAPTURE, pokemon});
    const release = (pokemon) => dispatch({ type: RELEASE, pokemon });
    const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon});
    const addPokemons = (pokemon) => dispatch({type: ADD_POKEMONS, pokemon});

    const providerValue = {
        pokemons,
        capturedPokemons,
        release,
        capture,
        addPokemon,
        addPokemons
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;
export { PokemonContext };