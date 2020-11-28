import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_utils'
import {recieveAllPokemon} from './actions/pokemon_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Test</h1>, root)

    //TODO testing
    window.fetchAllPokemon = fetchAllPokemon;
    window.recieveAllPokemon = recieveAllPokemon;
});




