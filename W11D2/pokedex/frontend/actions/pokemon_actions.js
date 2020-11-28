import * as APIUtil from '../util/api_utils'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_POKE = "RECEIVE_POKE"

export const receiveAllPokemon = (pokemon) => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon: pokemon
    }
}

export const receivePoke = (poke) => {
    return {
        type: RECEIVE_POKE,
        poke: poke
    }
}


export const requestAllPokemon = () => (dispatch) => {
    return (
        APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
    )
}

export const requestPoke = (pokeId) => (dispatch) => {
    return (
        APIUtil.fetchPoke(pokeId).then(poke => dispatch(receivePoke(poke)))
    )
}