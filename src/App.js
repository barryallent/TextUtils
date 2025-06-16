import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// let name = "React App";
function App() {

  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Dark mode background color
      showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
    }, 1000);
    document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background color
      document.title = "TextUtils";
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
    <div>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </div>


    </>
  );
}

export default App;
