import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
    query pokemons($first: int!) {
        pokemons(first: $first) {
            id
            name
            order
            img
        }
    }
`