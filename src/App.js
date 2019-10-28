import React from 'react';
import './App.css';
// import {storyClass} from './api/story'
// import Counter from './components/Counter'
// import CounterHook from './components/Counter-hook'
// import Life from './components/life'
const domdiff = require('./dom-diff/index')
function App() {
  // storyClass().then(data => console.log(data))
  return (
    <div className="App">
      Learn React
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <Life /> */}
    </div>
  );
}

export default App;
