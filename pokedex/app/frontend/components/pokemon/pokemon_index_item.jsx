import React from 'React';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const pokemon = this.props.pokemon;
    const { id, name, imageUrl } = pokemon;
    return <Link to={`/pokemon/${id}`} ><li><img width='50px' src={imageUrl}/>{name}</li></Link>;
  }
}

export default PokemonIndexItem;
