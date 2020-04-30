import React from 'react'
import './App.css'
// import {storyClass} from './api/story'
// import Counter from './hooks/Counter'
// import CounterHook from './hooks/Counter-hook'
// import Life from './components/life'
// import Hooks from './hooks'
// import ChangeTitle from './hooks/title'
import CounterInterval from './hooks/counter-interval'
import Zhuanpan from './components/zhuanpan/zhuanpan'
import Tree from './components/demo/tree'
// const domdiff = require('./dom-diff/index')
import 'antd/dist/antd.css'
function App() {
  // storyClass().then(data => console.log(data))
  return (
    <div className="App">
      Learn React
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <Life /> */}
      {/* <Hooks /> */}
      {/* <ChangeTitle /> */}
      {/* <CounterInterval /> */}
      {/* <Zhuanpan /> */}
      <Tree></Tree>
    </div>
  )
}

export default App
