import React, {useState} from 'react'

function ExampleWithManyStates(){
  const [age, setAge] = useState(42)
  const [fruit, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{text: 'learn react hooks'}])

  console.log('age', age)
  console.log('fruit', fruit)
  console.log('todos', todos)
  // useState(33)

  // useState('banana2');
  // useState([{ text: 'Learn Hooks2' }]); //...
  // console.log('age', age)
  // console.log('fruit', fruit)
  // console.log('todos', todos)
  return <div>hooks</div>
}
export default ExampleWithManyStates