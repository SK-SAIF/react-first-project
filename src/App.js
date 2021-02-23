import logo from './logo.svg';
import './App.css';
var  x={
  givenName:"Saif",
  age: 23
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{x.givenName}</h1>
        <p>Hello world</p>
      </header>
    </div>
  );
}

export default App;
