import React from 'react';
import rollDice from './Roll';
import './App.css';

function App() {
  return <Dice/>;
}

export default App


function Dice() { 
  return (
    <div id="dice">
      <img id="first" alt="" src=""/> 
      <img id="second" alt="" src=""/> 
      <button onClick={rollDice}>Roll!</button>
    </div>
  )
}
