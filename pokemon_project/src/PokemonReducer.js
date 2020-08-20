export const CAPTURE = 'CAPTURE'
export const RELEASE = 'RELEASE'

const defaultState = {
    pokemons: [
        {id: 1, name: 'Bulbasaur'},
        {id: 2, name: 'Charmander'},
        {id: 3, name: 'Squirtle'}
    ],
    capturedPokemons: []
};

const [state, dispatch] = useReducer(pokemonReducer, defaultState);

const pokemonReducer = (state, action) => { //Returns the enw state based on the action type
    switch (action.type) {
        case CAPTURE:
            // handle capture and return new state
            return capturePokemon(action.pokemon, state)
        case RELEASE:
            // handle release and return new state
            return releasedPokemon(action.pokemon, state)
        default:
            return state
    }
}

// Capture function
const getPokemonList = (pokemons,capturedPokemon) =>
    pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
    pokemons: getPokemonList(state, pokemon),
    capturedPokemons: [...state.capturedPokemons, pokemon]
});

// Release function
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
    capturedPokemons.filter(pokemon => pokemon !== releasedPokemon);

const releasedPokemon = (releasedPokemon, state) => ({
    peokmons: [...state.pokemons, releasedPokemon],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});
