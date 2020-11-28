import filterReducer from './filter_reducer'
import {combineReducers} from 'redux'

const uiReducer = combineReducers({
    filter: filterReducer
})

export default uiReducer

