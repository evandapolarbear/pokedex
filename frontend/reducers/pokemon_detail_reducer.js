import {RECEIVE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const _defaultState = {};

const PokemonDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_POKEMON:

      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
