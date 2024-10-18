import React from 'react'
import { Link } from 'react-router-dom';
import "./css/OwnNavbar.css"
const OwnNavbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/new">Create user</Link>
        </li>
        <li>
          <Link to="/users">Display users</Link>
        </li>
      </ul>
    </nav>
  )
}

export default OwnNavbar