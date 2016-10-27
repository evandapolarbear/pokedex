import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return {pokemon: state};
};

export default connect(
  mapStateToProps
)(PokemonDetail);
