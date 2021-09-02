import React from 'react';

class Button extends React.Component {
  constructor () {
    super();
    this.state = {
      clickNum: 0,
    }
    this.sum = this.sum.bind(this);
  }
  sum() {
    this.setState((lastThis) => ({
      clickNum: lastThis.clickNum + 1,
    }))
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.sum} value={this.state.clickNum} />
      </div>
    );
  }
}

export default Button;
