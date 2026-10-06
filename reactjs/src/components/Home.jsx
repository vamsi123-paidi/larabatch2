import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
        navigate('/useref')
  }
  return (
    <div>
      Home
      <button onClick={handleClick}>Go to UseRef</button>
    </div>
  )
}

export default Home