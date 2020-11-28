import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import { merge } from 'lodash';

function pokemonReducer(state = {}, action) {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case (RECEIVE_ALL_POKEMON):
            return action.pokemon;

        case (RECEIVE_POKE):
            newState = merge({}, state)
            return newState[action.poke.id] = action.poke;
        default:
            return state
    }
}

// const { drop } = action;
// newState = Object.assign(
// {},
// state,
// { [drop.id]: drop }
// );

// return newState;


export default pokemonReducer