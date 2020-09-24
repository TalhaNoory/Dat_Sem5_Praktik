import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* Wrap this around 'Router' and 'App', 
to access it 'ContextAPI' at the highest point in our application, to use it. */
import { ProductProvider } from './Context';

import { BrowserRouter as Router } from 'react-router-dom';
//1st import 'BrowserRouter' gonna hold info about all our routes

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);
