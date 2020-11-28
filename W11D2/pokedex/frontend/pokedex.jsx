import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { fetchPoke } from './util/api_utils';
import { fetchAllPokemon } from './util/api_utils'
import { receiveAllPokemon, requestAllPokemon, requestPoke, receivePoke } from './actions/pokemon_actions'
import { selectAllPokemon } from './reducers/selectors'



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root)

    //TODO testing
    window.fetchPoke = fetchPoke;
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.getState = store.getState; 
    window.requestPoke = requestPoke;
    window.receivePoke = receivePoke;
    window.dispatch = store.dispatch;
});




