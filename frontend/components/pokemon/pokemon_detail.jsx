import React from 'react';
import ItemDetailContainer from './item_detail_container';
import {withRouter} from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  movesVar() {
    if (this.props.pokemon.pokemonDetail.moves !== undefined) {
      return this.props.pokemon.pokemonDetail.moves.join(", ");
  }}

  handleClick(url) {
    return (e => this.props.router.push(url));
  }

  itemsVar() {
    if (this.props.pokemon.pokemonDetail.items !== undefined) {
      return (
        <div>
        <ul>
          {this.props.pokemon.pokemonDetail.items.map((el, i) => (
            <li key={i}>
              <ItemDetailContainer key={i} item={el} />
              <img src={el.image_url} onClick={this.handleClick(`/pokemon/${this.props.pokemon.pokemonDetail.id}/item/${el.id}`)}/>
            </li>)
            )
          }
        </ul>
        {this.props.children}
      </div>
      );
    }
  }

  render() {
    return(
      <div className="detail">
        <h1>Name: {this.props.pokemon.pokemonDetail.name}</h1>
        <img src={this.props.pokemon.pokemonDetail.image_url} height="100" width="100"/>

        <h2>Attack: {this.props.pokemon.pokemonDetail.attack}</h2>
        <h2>Defense: {this.props.pokemon.pokemonDetail.defense}</h2>
        <h2>Moves: {this.movesVar()}</h2>
        <h2>Type: {this.props.pokemon.pokemonDetail.poke_type}</h2>
        <h2>Items: {this.itemsVar()} </h2>


      </div>
    );
  }
}

export default withRouter(PokemonDetail);
