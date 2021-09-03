import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.saveChange = this.saveChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      name: '',
      age: 0,
      email: '',
      password: '',
      remember: false,
      file: '',
    }
  }
  saveChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
    console.log(this.fileInput.current.files[0])
  }
  render() {
    return (
      <section onChange={this.saveChange}>
        <fieldset>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="number" name="age" placeholder="Age" />
          <input type="password" name="password" placeholder="Password" />
        </fieldset>
        <label>
          <input type="checkbox" name="remember" />
          Lembrar
        </label>
        <input type="file" name="file" ref={this.fileInput} />
      </section>
    )
  }
}

export default Forms;
