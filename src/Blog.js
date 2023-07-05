import React from 'react'
import {useNavigate} from 'react-router-dom'

const Blog = () => {
    let Navigate = useNavigate()
  return (
    <div>
        <h1> Blog COMPONENT</h1>
        <button onClick={() => Navigate('/contact')}> Log in</button>
    </div>
  )
}

export default Blog