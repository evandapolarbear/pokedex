import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectPokemon} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {pokemon: state};
};

export default connect(
  mapStateToProps
)(PokemonDetail);
