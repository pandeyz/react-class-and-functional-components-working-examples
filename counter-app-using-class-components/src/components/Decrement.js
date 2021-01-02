// Decrement.js
import React from 'react';

class Decrement extends React.Component {
    render() {
        return (
          <button onClick={ this.props.onDecrementClick }>-</button>
        );
      }
  }
  
  export default Decrement;
  