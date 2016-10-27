import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.pokemon.length === 0) {
      return <div>Loading</div>;
    } else {
    return (<ul>
      {this.props.pokemon.map(poke => (
        <PokemonIndexItem key={poke.id} pokemon={poke}/>
      ))}
    </ul>);
    }
  }
}

export default PokemonIndex;
