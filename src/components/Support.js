import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/labs')
  }
  const backHandler = () => {
    navigate(-1)
  }
  return (<div>
    <div>
      This is Support Page
    </div>
    <button onClick={clickHandler}>Move to support page</button>
    <button onClick={backHandler}>GO Back</button>
  </div>

  )
}

export default Support
