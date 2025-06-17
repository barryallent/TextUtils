import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';

// React Router is a library that enables client-side routing in React applications
// It allows you to create a Single Page Application (SPA) where navigation
// happens without full page reloads, making the app feel more like a native application

// Import necessary components from react-router-dom
// HashRouter: Used for GitHub Pages deployment
// - Uses URL hash (#) for routing
// - Works better with static hosting
// Routes: Container for all your routes
// Route: Individual route definition
// - Defines a mapping between a URL path and a component

// let name = "React App";
function App() {

  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Dark mode background color
      // showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1000);
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background color
      // document.title = "TextUtils";
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Hide the alert after 2 seconds
    // setTimeout(() => {
    //   setAlert(null);
    // }, 2000);
  }

  //can return only one root element
  //can use fragments to return multiple elements
  //need to use className instead of class in JSX, becaue class is a reserved keyword in JavaScript
  //JSX is a syntax extension for JavaScript that looks similar to HTML, its 95% similar to HTML
  // use forHtmlFor instead of for in JSX, because for is a reserved keyword in JavaScript
  // All javascript expressions must be wrapped in curly braces {} in JSX
  return (
    <>
      {/* Router component must wrap all components that need routing functionality */}
      <Router>
        {/* Navbar will be shown on all pages */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* Routes component acts as a container for all your routes */}
          <Routes>
            {/* Route for home page (/) */}
            {/* exact prop ensures the route matches exactly */}
            {/* element prop specifies which component to render */}
            <Route
              exact path="/"
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Char Counter, Remove Extra Spaces & More!" mode={mode} />}
            />

            {/* Route for about page (/about) */}
            <Route
              exact path="/about"
              element={<About mode={mode} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
