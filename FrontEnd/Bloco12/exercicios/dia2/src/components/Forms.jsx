import React from 'react';

class StateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
     this.state = {
      state: props.states.states[0].uf,
      city: ''
    };
  }
  handleChange({ target }) {
    this.setState({ [target.name]: target.value })
  }
  render() { 
    const { states } = this.props;
    //console.log(states.states.filter((curState) => state ? curState.state === state : true));
    return (
      <div>
        <label htmlFor="state">Estado: </label>
        <select id="state" name="state" onChange={this.handleChange} >
          {states.states.map((state) => <option name="state" value={state.uf} key={`${state.name}-${state.uf}`}>{`${state.name}: ${state.uf}`}</option>)}
        </select>
        <label htmlFor="city">Cidade: </label>
        <select name="city" id="city">
          { states.states
            .find((state) => state.uf === this.state.state).cities
            .map((cur, index) => <option value={cur} key={`${cur}-${index}`}>{cur}</option>) }
        </select>
      </div>
    );
  }
}

class Forms extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="name">Nome: </label>
          <input name="name"  id="name" placeholder="Nome" maxLength="40" required />
          <label htmlFor="email">Email: </label>
          <input name="email" id="email" placeholder="Email" maxLength="50" required />
          <label htmlFor="address">Endereco: </label>
          <input name="address" id="address" placeholder="Endereco" maxLength="200" required />
          <label htmlFor="city">Cidade: </label>
          <input name="city" id="city" placeholder="Cidade" maxLength="28" required/>
          <StateSelector states={this.props.statesObj} />
        </fieldset>
      </form>
    );
  }
}

export default Forms;