import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
