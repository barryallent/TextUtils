import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "React App";
function App() {
  //can return only one root element
  //can use fragments to return multiple elements
  //need to use className instead of class in JSX, becaue class is a reserved keyword in JavaScript
  //JSX is a syntax extension for JavaScript that looks similar to HTML, its 95% similar to HTML
  // use forHtmlFor instead of for in JSX, because for is a reserved keyword in JavaScript
  // All javascript expressions must be wrapped in curly braces {} in JSX
  return ( 
    // <>
    // <h1>  Hello </h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. custom text
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React App
    //     </a>
    //   </header>
    // </div>
    // </>
    <>
      {/* <nav>
         <li>Home</li>
        <li>About</li>
        <li>Contact</li> 
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit adipisci voluptas culpa veritatis, temporibus rerum modi hic nostrum! In a ex id corporis voluptatum animi fuga quia dolor? Perferendis.</p>
      
    </div> */}
    </>
  );
}

export default App;
