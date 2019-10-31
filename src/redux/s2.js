// 封装共用代码及state传参
const createStore = function(initState){
  let state = initState
  let listeners = []
  
  function subscribe(listener){
    listeners.push(listener)
  }
  function changeState(newState){
    state = newState
    listeners.forEach(listener => listener())
  }
  function getState(){
    return state
  }
  return {
    subscribe,
    changeState,
    getState
  }
}

let initState = {
  counter: {
    count: ''
  },
  info: {
    name: '',
    desc: ''
  }
}
let store = createStore(initState)
store.subscribe(() =>{
  let state = store.getState()
  console.log(`${state.info.name}: ${state.info.desc}`)
})
store.subscribe(() =>{
  let state = store.getState()
  console.log(`${state.counter.count}`)
})

store.changeState({
  ...store.getState(),
  info: {
    name: '前端1部',
    desc: '技术体验部'
  }
})

store.changeState({
  ...store.getState(),
  counter: {
    count: 2
  }
})
