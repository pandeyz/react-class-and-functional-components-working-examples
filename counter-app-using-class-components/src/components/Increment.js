// Increment.js
import React from 'react';

class Increment extends React.Component {
    render() {
        return (
          <button onClick={ this.props.onIncrementClick }>+</button>
        );
      }
  }
  
  export default Increment;
  