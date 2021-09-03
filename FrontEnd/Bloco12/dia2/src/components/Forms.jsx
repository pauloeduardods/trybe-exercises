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
    }
  }
  saveChange({target}) {
    const { name, value } = target;
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
      </section>
    )
  }
}

export default Forms;