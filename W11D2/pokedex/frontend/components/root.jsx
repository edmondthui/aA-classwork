import React from 'react';
import { Provider } from 'react-redux';
import PokemonContainer from '../components/pokemon/pokemon_index_container'
// import PokemonDetailContainer from './pokemon/pokemon_detail_container'
import { HashRouter, Route } from "react-router-dom";


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonContainer} />
      {/* <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} /> */}
    </HashRouter>
  </Provider>
);

export default Root