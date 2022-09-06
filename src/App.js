import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Первый урок по React, {props.name}</h3>
      </header>
    </div>
    
  );
}

export default App;
