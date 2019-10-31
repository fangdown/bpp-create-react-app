// 提取中间件
const createStore = function(reducer, initState){
  let state = initState
  let listeners = []
  
  function subscribe(listener){
    listeners.push(listener)
  }
  function dispatch(action){
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  function getState(){
    return state
  }
  /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}
const counterReducer = function(state, action){
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

const infoReducer = function(state, action){
  switch(action.type){
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESC':
      return {
        ...state,
        desc: action.desc
      }
  }
}

// 每一次dispatch 都循环一次，
const combineReducers = function(reducers){
  const reducerKeys = Object.keys(reducers)
  // 这里的state会传进来state
  return function combinaction(state={}, action){
    const nextState = {}
    for(let i = 0; i < reducerKeys.length; i++){
      const key = reducerKeys[i]
      const reducer = reducers[key]
      // 拿到上一个的值
      const prevStateForKey = state[key]
      const nextStateForKey = reducer(prevStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}
const reducer = combineReducers({counter:counterReducer, info:infoReducer})

let initState = {
  counter: {
    count: 1
  },
  info: {
    name: '',
    desc: ''
  }
}
let store = createStore(reducer, initState)
const next = store.dispatch
// 日志记录
const loggerMiddleware = (action) =>{
  console.log('this.state-before:', store.getState())
  next(action)
  console.log('this.state-after:', store.getState())
}
store.dispatch = (action) => {
  loggerMiddleware(action)
}
// 写死了 不合理
const errorMiddleware = (action) =>{
  try{
    loggerMiddleware(action)
  }catch(error){
    console.log('error', error)
  }
}
// 错误报告
store.dispatch = errorMiddleware





store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'SET_NAME',
  name: '前端2部'
})
store.dispatch({
  type: 'SET_DESC',
  desc: '产研部'
})

