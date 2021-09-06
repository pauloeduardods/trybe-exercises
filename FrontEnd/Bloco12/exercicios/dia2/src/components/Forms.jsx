import React from 'react';

class StateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
     this.state = {
      state: '',
      city: ''
    };
  }
  handleChange({ target }) {
    this.setState({ [target.name]: target.value })
  }
  render() { 
    const { states } = this.props;
    return (
      <div>
        <input type="text" list="state" placeholder="Estado" />
        <datalist id="state" name="state" onChange={this.handleChange} >
          {states.states.map((state) => 
            <option name="state" value={state.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} key={state.name} />)}
        </datalist>
        <input type="text" list="town" placeholder="Cidade"/>
        <datalist id="town" name="city" >
          <option value="Selecione uma cidade" />
          {states.states.filter((state) => this.state.state ? state.name === this.state.state : true)
            .map((cur) => 
            cur.cities.map((cur) => <option key={cur} value={ cur.normalize('NFD').replace(/[\u0300-\u036f]/g, "") } />))}
        </datalist>
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