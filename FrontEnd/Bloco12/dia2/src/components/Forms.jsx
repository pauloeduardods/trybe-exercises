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
      <section>
        <input type="text" onChange={this.saveChange} name="name" placeholder="Name" />
      </section>
    )
  }
}

export default Forms;