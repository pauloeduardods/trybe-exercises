import React from 'react';

class Button extends React.Component {
  current = 0
  constructor () {
    super();
    this.sum = this.sum.bind(this);
  }
  sum() {
    this.current += 2;
    console.log(this.current);
  }
  render() {
    console.log(this.current);
    return (
      <div>
        <input type="button" onClick={this.sum} value="+2" />
      </div>
    );
  }
}

export default Button;
