import {combineReducers} from 'redux'
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer'
import errorsReducer from './errors_reducer'
// import filterReducer from './filter_reducer'
import uiReducer from './ui_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    errors: errorsReducer,
    session: sessionReducer
})


export default rootReducer;