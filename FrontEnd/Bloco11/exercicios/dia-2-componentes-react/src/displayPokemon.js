import React, {Component} from 'react';

function processObject({ name, type, averageWeight }) {
  return (
  <div>
    <p>{name}</p>
    <p>{type}</p>
      <p>Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
  </ div>
  );
}

export default class DisplayPokemon extends Component {
  render() {
    const { pokemons } = this.props;
    return (
    <>
      {pokemons.map((pokemon) => processObject(pokemon))}
    </>
    );
  }
}