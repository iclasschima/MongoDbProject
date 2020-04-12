import React from "react"
import {Link} from "react-router-dom"

export default function Navbar () {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExerTracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Exercises</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link"> Create exercise log </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link"> Create user </Link>
              </li>
            </ul>
        </div>
      </nav>
    )
}