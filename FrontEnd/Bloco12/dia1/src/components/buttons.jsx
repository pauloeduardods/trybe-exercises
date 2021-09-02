import React from 'react';

class Button extends React.Component {
  constructor () {
    super();
    this.state = {
      clickNum: 0,
    }
    this.sum = this.sum.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  sum() {
    this.setState((lastState) => ({
      clickNum: lastState.clickNum + 1,
    }));
  }
  subtract() {
    this.setState((lastState) => ({
      clickNum: lastState.clickNum - 1,
    }));
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.sum} value={this.state.clickNum} />
        <input type="button" onClick={this.subtract} value={this.state.clickNum} />
      </div>
    );
  }
}

export default Button;
