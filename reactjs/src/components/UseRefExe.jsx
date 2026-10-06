import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UseRefExe = () => {
    const inputRef = useRef()
    const navigate = useNavigate()
    const handleFocus  = ()=>{
        inputRef.current.focus()
    }
 return (
    <div>
        <input type="text"  />
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
        <button onClick={()=>navigate('/')}>Go to back</button>
        <button onClick={()=>navigate('/useeffect')}>Go to useeffect</button>
    </div>
  )
}

export default UseRefExe