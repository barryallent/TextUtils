import React from 'react'
import PropTypes from 'prop-types'

//this is a reusable component
//props are used to pass data to the component
//props type can be an object, string, number, array, function, etc.
export default function Navbar(props) {
  //   console.log('Navbar props:', props);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" for="switchCheckDefault">Dark Mode</label>
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
