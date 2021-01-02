import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

class App extends React.Component {
  constructor() {
    // If you are not planning to use the state then there is no need of constructor
    super();

    // State object
    this.state = { count: 0 }
  }

  // Event handling function, an arrow function so its binding is not required
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App">
        <h4>Counter App - Class Components</h4>
        <div>
          <Increment onIncrementClick={ this.handleIncrement } />
          {/* Here we have passed the event handler to the child component and inside child components it is available inside "props"  */}
          <Counter counter={ this.state.count } />
          {/* Here we have passed state from parent component to child components, inside child components it is available inside "props" */}
          <Decrement onDecrementClick={ this.handleDecrement } />
          {/* Here we have passed the event handler to the child component and inside child components it is available inside "props"  */}
        </div>
      </div>
    );
  }
}

export default App;
