import React from 'react'
import PropTypes from 'prop-types'
// Import Link from react-router-dom
// Link is a special component that provides navigation without page reload
// It's like an <a> tag but for client-side routing
import { Link } from 'react-router-dom'

//this is a reusable component
//props are used to pass data to the component
//props type can be an object, string, number, array, function, etc.
export default function Navbar(props) {
  //   console.log('Navbar props:', props);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* 
          Link component replaces <a> tags in React Router
          'to' prop is like 'href' in <a> tags but for client-side routing
          When clicked, it updates the URL and renders the matching Route component
          without reloading the page
        */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home link - navigates to root path */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* About link - navigates to /about path */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

//just telling the type of props that this component will receive
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //isRequired means that this prop is mandatory
  //if the prop is not passed, it will throw a warning in the console
  aboutText: PropTypes.string
}

//default props are used when the props are not passed to the component
//will be deprecated in future versions of react
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text Here"
} 
