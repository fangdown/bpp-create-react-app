// 按计划去更改state
const createStore = function(initState){
  let state = initState
  let listeners = []
  
  function subscribe(listener){
    listeners.push(listener)
  }
  function changeState(action){
    state = plan(state, action)
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
const plan = function(state, action){
  switch(action.type){
    case 'INCREMENT': 
      return {
        ...state,
        count: state.count +1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count -1
      }
    default:
      return state
  }
}

let initState = {
  count: 2
}
let store = createStore(initState)
store.subscribe(() =>{
  let state = store.getState()
  console.log(`${state.count}`)
})

store.changeState({
  type: 'INCREMENT'
})

store.changeState({
  type: 'DECREMENT'
})
store.changeState({
  type: 'ABC'
})

