import React, {Component} from 'react';
import PropTypes from 'prop-types';

function processObject({ name, type, averageWeight, image, moreInfo }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="mx-1 my-2 rounded-3 border border-2 border-black" >
        <a href={moreInfo} className="container row text-reset text-decoration-none">
          <div className="col-7">
            <p className="fs-4">{name}</p>
            <p className="fs-6">{type}</p>
            <p className="fs-6">Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <img className="col-5" src={image} alt={`${name} Image`}></img>
        </a>
      </div>
    </div>
  );
}

export default class DisplayPokemon extends Component {
  render() {
    return (
    <section className="row">
        {this.props.pokemons.map((pokemon) => processObject(pokemon))}
    </section>
    );
  }
}

DisplayPokemon.protoTypes = {
  pokemons: PropTypes.array.isRequired,
}