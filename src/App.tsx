import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={(<>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/about">About</Link>
          </>)} />
          <Route path="/about" element={(<>
            <p>
              Edit <code>src/App.tsx</code> and save to reload!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/">Home</Link>
          </>)} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
