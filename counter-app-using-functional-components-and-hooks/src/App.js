import { useState } from 'react';
import './App.css';

import Counter from './components/Counter';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

function App() {

  // State variable and its handling function
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count+1);
  }
  
  const handleDecrement = () => {
    setCount(count-1);
  }

  return (
    <div className="App">
      <h4>Counter App - Functional Components & Hooks</h4>
      <div>
        <Increment onIncrementClick={ handleIncrement } />
        {/* Here we have passed the event handler to the child component and inside child components it is available inside "props"  */}
        <Counter counter={ count } />
        {/* Here we have passed state from parent component to child components, inside child components it is available inside "props" */}
        <Decrement onDecrementClick={ handleDecrement } />
        {/* Here we have passed the event handler to the child component and inside child components it is available inside "props"  */}
      </div>
    </div>
  );
}

export default App;
