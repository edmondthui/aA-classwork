import pokemonReducer from './pokemon_reducer';
import { combineReducers } from 'redux'
import itemsReducer from './item_reducer'

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    items: itemsReducer
})

export default entitiesReducer