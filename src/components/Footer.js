import React from 'react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa' }} className="text-dark py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          Created by Abhinav T
          <a 
            href="https://github.com/barryallent/TextUtils" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark ms-2"
          >
            <i className="bi bi-github"></i>
          </a>
        </p>
      </div>
    </footer>
  )
} 