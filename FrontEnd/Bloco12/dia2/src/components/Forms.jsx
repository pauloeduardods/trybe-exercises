import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();
    this.saveChange = this.saveChange.bind(this);
    this.state = {
      name: '',
      age: 0,
      email: '',
      password: '',
      remember: false,
    }
  }
  saveChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <section onChange={this.saveChange}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email"  name="email" placeholder="Email" />
        <input type="number" name="age" placeholder="Age" />
        <input type="password"  name="password" placeholder="Password" />
        <label>
          <input type="checkbox" name="remember" />
          Lembrar
        </label>
      </section>
    )
  }
}

export default Forms;