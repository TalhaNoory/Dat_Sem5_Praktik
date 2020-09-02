import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import About from './Components/About';
import {
  BrowserRouter
    as Router, Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Shop />
        <About />
      </div>
    </Router>
  );
}

export default App;
