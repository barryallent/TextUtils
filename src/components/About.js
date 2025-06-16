import React from 'react'

export default function About(props) {
  return (
    <div className="container my-3">
      <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>About TextUtils</h2>
      <div className={`card bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <div className="card-body">
          <h5 className="card-title">Your Text Manipulation Tool</h5>
          <p className="card-text">
            TextUtils is a versatile text manipulation tool built with React. It helps you perform various operations on your text:
          </p>
          <ul className={`list-group list-group-flush bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Convert text to UPPERCASE or lowercase
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Remove extra spaces from your text
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Copy text to clipboard with one click
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Count words and characters
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Clear text with a single button
            </li>
          </ul>
          <p className="card-text mt-3">
            Built with modern web technologies:
          </p>
          <ul className={`list-group list-group-flush bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              React.js for the frontend
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              Bootstrap for styling
            </li>
            <li className={`list-group-item bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              React Router for navigation
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
