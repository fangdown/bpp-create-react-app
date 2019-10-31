// 最简单的发布订阅
let state = {
  count: 1
}
let listeners = []

function subscribe(listener){
  listeners.push(listener)
}


function change(count){
  state.count = count
  listeners.forEach(listener => listener())
}


subscribe(() => {
  console.log('state: ',state.count)
})

change(1)
change(2)
change(3)