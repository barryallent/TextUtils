import React from 'react'

export default function About(props) {
  const mystyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743',

  }

  const headingStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743'
  }

  return (
    <div className="container my-3">
      <h2 style={headingStyle}>About TextUtils</h2>
      <div className="card" style={mystyle}>
        <div className="card-body">
          <h5 className="card-title">Your Text Manipulation Tool</h5>
          <p className="card-text">
            TextUtils is a versatile text manipulation tool built with React. It helps you perform various operations on your text:
          </p>
          <ul className="list-group list-group-flush" style={mystyle}>
            <li className="list-group-item" style={mystyle}>
              Convert text to UPPERCASE or lowercase
            </li>
            <li className="list-group-item" style={mystyle}>
              Remove extra spaces from your text
            </li>
            <li className="list-group-item" style={mystyle}>
              Copy text to clipboard with one click
            </li>
            <li className="list-group-item" style={mystyle}>
              Count words and characters
            </li>
            <li className="list-group-item" style={mystyle}>
              Clear text with a single button
            </li>
          </ul>
          <p className="card-text mt-3">
            Built with modern web technologies:
          </p>
          <ul className="list-group list-group-flush" style={mystyle}>
            <li className="list-group-item" style={mystyle}>
              React.js for the frontend
            </li>
            <li className="list-group-item" style={mystyle}>
              Bootstrap for styling
            </li>
            <li className="list-group-item" style={mystyle}>
              React Router for navigation
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
