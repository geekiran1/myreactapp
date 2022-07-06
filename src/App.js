import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Testing the pull changes from server</h2>
        <h4>Adding new codes, tag changed at server</h4>
        <h3>Adding new codes. Changed in local</h3>
        <h3>Adding new codes. By Radhen</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload. Testing branching strategy.
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
