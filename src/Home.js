import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
    const [Auth , setAuth] = useState(false)
    if(Auth){
        return <Navigate to = '/Dashboard'/>
    }
  return (
    <>
    <div>
          <h1>  welcome to home page </h1>
      </div>
      <button onClick={() => setAuth(true)}>log in</button></>
  )
}

export default Home