import rootReducer from '../reducers/root_reducer'
import { createStore } from 'redux';

const configureStore = () => createStore(rootReducer);
const store = configureStore()

export default store;
