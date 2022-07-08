import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';



const App = () => {

  const Test = () => {
    const person = //Object.freeze(
      { age: 40}
      //);
    person.age = 30;
    //person = { age: 30} ;
    console.log(person.age);
  }

  useEffect(() => { console.log("Mounted");
  Test(); 
  var varNodes = document.getElementsByClassName('var');
for (var i = 0; i < varNodes.length; i++) {
  varNodes[i].addEventListener('click', function() {
    console.log('You clicked element #' + i);
  });
}


var letNodes = document.getElementsByClassName('let');
for (let i = 0; i < letNodes.length; i++) {
  letNodes[i].addEventListener('click', function() {
    console.log('You clicked element #' + i);
  });
}
},[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>Testing the pull changes from server</h3>
        <h3>Testing Radhen Khant</h3>
        <h2>Testing the pull changes from server</h2>
        <h4>Adding new codes, tag changed at server</h4>
        <h3>Adding new codes. Changed in local</h3>
        <h3>Adding new codes. By Radhen</h3>

        <div>
          <h1>Var</h1>
          <div><button className='var'>1</button><button className='var'>2</button><button className='var'>3</button></div>
        </div>
        <div>
          <h1>Let</h1>
          <div><button className='let'>1</button><button className='let'>2</button><button className='let'>3</button></div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload. Testing branching
          strategy.
        </p>

        <p>Edit and save to reload. Testing branching strategy.</p>
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
