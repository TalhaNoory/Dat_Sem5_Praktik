import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import DC from './Components/DefaultComponent';
import user from './Test/User_test'

import { Switch, Route } from 'react-router-dom';
//1st import 'Switch' used for grouping a route
//2nd import 'Route' displaying the specific route

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/user" component={user}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={DC}></Route>
        </Switch>
      </div>
    );
  }
};

export default App;
