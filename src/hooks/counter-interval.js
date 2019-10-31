import React, {useState,useEffect} from 'react'

export default function Counter (){
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count +1 )
    }, 1000);
  }, [])
  return <div>{count}</div>
}