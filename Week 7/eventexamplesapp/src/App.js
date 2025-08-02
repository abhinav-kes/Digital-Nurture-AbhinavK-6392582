import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! Static Message: Have a great day!");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event: ", e);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>{' '}
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleClick}>Click On Me</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
