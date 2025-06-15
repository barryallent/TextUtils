import './App.css';


// let name = "React App";
function App() {
  //can return only one root element
  //can use fragments to return multiple elements
  //need to use className instead of class in JSX, becaue class is a reserved keyword in JavaScript
  //JSX is a syntax extension for JavaScript that looks similar to HTML, its 95% similar to HTML
  // use forHtmlFor instead of for in JSX, because for is a reserved keyword in JavaScript
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

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
}

export default App;
