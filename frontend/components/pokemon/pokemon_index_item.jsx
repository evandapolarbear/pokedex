import React from 'react';
import {withRouter} from 'react-router';

class PokemonIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(url) {
    return ( e => this.props.router.push(url));

  }

  render() {
    return (<li className="pokemon-index-item"
                 onClick={this.handleClick(`/pokemon/${this.props.pokemon.id}`)}>
                 {this.props.pokemon.name}
                 <img src={this.props.pokemon.image_url} height="150" width="150"/>
            </li>);
  }

}

export default withRouter(PokemonIndexItem);
