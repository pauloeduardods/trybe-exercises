import React from 'react';

class Button extends React.Component {
  constructor () {
    super();
    this.state = {
      clickNum: 0,
      color: { backgroundColor: 'white' },
    }
    this.sum = this.sum.bind(this);
    this.subtract = this.subtract.bind(this);
    this.verifier = this.verifier.bind(this);
  }
  verifier() {
    let color = { backgroundColor: 'Red' };
    if (this.state.clickNum % 2 === 0) {
      color.backgroundColor = 'green';
    } else if (this.state.clickNum <= 0) {
      color.backgroundColor = 'blue'
    }
    return color;
  }
   sum() {
    this.setState((lastState) =>  ({
      clickNum: lastState.clickNum + 1,
      color: this.verifier(),
      })
    );
  }
  subtract() {
    this.setState((lastState) => ({
      clickNum: lastState.clickNum - 1,
      color: this.verifier(),
    }));
  }
  render() {
    return (
      <div>
        <input type="button" style={this.state.color} onClick={this.sum} value={this.state.clickNum} />
        <input type="button" style={this.state.color} onClick={this.subtract} value={this.state.clickNum} />
      </div>
    );
  }
}

export default Button;
