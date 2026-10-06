import React, { useEffect, useState } from 'react'

const UseEffectExe = () => {
    const [ increment,setIncrement] = useState(0)
    const [ decrement,setdecrement] = useState(0)

    useEffect(()=>{
        console.log(increment)
    },[increment])
  return (
    <div>
        <h1>{ increment},{decrement}</h1>
        <button onClick={()=>setIncrement(increment+1)}>Increment</button>
        <button onClick={()=>setdecrement(decrement-1)}>decrement</button>

    </div>
  )
}

export default UseEffectExe