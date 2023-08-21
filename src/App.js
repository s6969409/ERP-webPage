import logo from './assets/image/logo.svg';
import './assets/App.css';
import './routes/index';
import { MainRouter } from './routes/index';
import { Col, Row } from 'antd';
import Sidebar from './components/Layout/Sidebar';

function App() {
  return (
    <div className="App">
      <MainRouter/>
      
      <header className="App-header">
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
