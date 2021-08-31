import React, {Component} from 'react';
import PropTypes from 'prop-types';

function processObject({ name, type, averageWeight, image }) {
  return (
  <div className="col-sm-6 col-lg-4">
    <p>{name}</p>
    <p>{type}</p>
    <p>Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      <img src={image} alt={`${name} Image`}></img>
  </div>
  );
}

export default class DisplayPokemon extends Component {
  render() {
    return (
    <section className="container row">
        {this.props.pokemons.map((pokemon) => processObject(pokemon))}
    </section>
    );
  }
}

DisplayPokemon.protoTypes = {
  pokemons: PropTypes.array.isRequired,
}