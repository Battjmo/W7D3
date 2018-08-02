import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions.js';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} pokemon={poke} />
      );
    return  (
      <div>
        <h1>POKEMON!</h1>
        <ul>
          { pokemon }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
