import React,  {useState} from 'react'
export default function CangeTitle() {
  const [times, setTimes] = useState(0)
  return (
    <div>
      <p>you click {times}次</p>
      <button onClick={() => {setTimes(times+1)}}>点击</button>
    </div>
  )
}


// import React, { useState } from 'react';

// export default function Example() {
//   const [times, setTimes] = useState(0)
//   return (
//     <div>
//       <p>you click {times}次</p>
//       <button onClick={() => {setTimes(times+1)}}>点击</button>
//     </div>
//   )
// }