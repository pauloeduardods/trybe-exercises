import React from 'react';

class Selector extends React.Component {
  render() { 
    return (
      <select name={this.props.name}>
        {this.props.states.states.map((state) => <option value={state} key={state}>{Object.values(state)[0]}</option>)}
      </select>
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
          <Selector states={this.props.statesObj} name="state" />
        </fieldset>
      </form>
    );
  }
}

export default Forms;