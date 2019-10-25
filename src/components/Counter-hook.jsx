import React,{useState, useEffect}  from 'react';
export default function CounterHook(){
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('执行...', count)
    return () => {
      console.log('清理....', count)
    }
  }, [count])
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={()=> {setCount(count +1)}}> click me</button>
    </div>
  )
}