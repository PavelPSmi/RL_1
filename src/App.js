import logo from './logo.svg';
import './App.css';
import Message from "./message";

function App() {
  let name = 'Павла'
  return (
    <div className='text'>
      <Message name={name} />
    </div>
  );
}

export default App;
