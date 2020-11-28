import rootReducer from '../reducers/root_reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk'

const configureStore = () => createStore(rootReducer, {}, applyMiddleware(thunk));

export default configureStore;
