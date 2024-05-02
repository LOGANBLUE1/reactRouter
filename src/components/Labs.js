import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate  = useNavigate()
  const clickHandler = () => {
    navigate('/about')
  }
  return (<div>
    <div>
      This is labs Page
    </div>
    <button onClick={clickHandler}>Move to about page</button>
  </div>
   
  )
}

export default Labs
