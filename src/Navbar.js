import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to = '/'> <li>Home</li></Link>
        <Link to = '/Dashboard'> <li>Dashboard</li></Link>
        <Link to = '/Blog'> <li>Blog</li></Link>
        <Link to ='/contact'> <li>Contact</li></Link>

    </div>
  )
}

export default Navbar