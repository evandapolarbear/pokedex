import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, receivePokemon, requestAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon, fetchPokemon} from "./util/api_util";
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';

window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.receivePokemon = receivePokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.fetchPokemon = fetchPokemon;

document.addEventListener("DOMContentLoaded",() => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(< Root store={store}/>, document.getElementById("root"));

});
