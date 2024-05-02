import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate  = useNavigate()
  const clickHandler = () => {
    navigate('/support')
  }
  return (<div>
    <div>
      This is About Page
    </div>
    <button onClick={clickHandler}>Move to support page</button>
  </div>

  )
}

export default About
