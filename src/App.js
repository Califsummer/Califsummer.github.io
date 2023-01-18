import logo from './logo.svg';
import './App.css';
import image from "./img/background.jpeg"; 


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
