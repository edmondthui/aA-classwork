import { RECIEVE_POKE } from '../actions/pokemon_actions'


const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}
    switch (action.type) {
        case (RECIEVE_POKE):
            return action.items
        default:
            return state;
    }
}

export default itemsReducer