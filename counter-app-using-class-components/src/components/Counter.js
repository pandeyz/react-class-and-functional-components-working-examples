// Counter.js
import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <span style={{ margin: 10 }}>{ this.props.counter }</span>   /* Some margin is applied here */
    );
  }
}

export default Counter;