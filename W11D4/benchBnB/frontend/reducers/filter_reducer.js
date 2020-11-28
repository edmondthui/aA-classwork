import {UPDATE_FILTER} from '../actions/filter_actions'
import { merge } from 'lodash'

const filterReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger;
    let minSeating = action.value ? action.value.minSeating : 0
    let maxSeating = action.value ? action.value.maxSeating : 0
    // debugger;
    switch (action.type) {
        case UPDATE_FILTER:
            newState = {...state, bounds: action.bounds.bounds, minSeating: minSeating, maxSeating: maxSeating}
            // newState = {...state, bounds: action.bounds.bounds}
            return newState;
        default: 
            return state
    }
}

export default filterReducer