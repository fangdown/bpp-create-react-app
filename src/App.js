import React from 'react';
import './App.css';
// import {storyClass} from './api/story'
import Counter from './components/Counter'
import CounterHook from './components/Counter-hook'
function App() {
  // storyClass().then(data => console.log(data))
  return (
    <div className="App">
      Learn React
      <Counter />
      <CounterHook />
    </div>
  );
}

export default App;
