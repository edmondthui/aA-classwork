import {UPDATE_FILTER} from '../actions/filter_actions'
import { merge } from 'lodash'

const filterReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case UPDATE_FILTER:
            newState = {...state, [action.filter]: action.value}
            return newState;
        default: 
            return state
    }
}

export default filterReducer