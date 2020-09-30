import React, { Component } from 'react';
import './App.css'
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'
import user from './Components/Users'
import product from './Components/Products'
import DC from './Components/DefaultComponent'

export default class App extends Component {
  render() {
    // console.log(this.state.user)
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/users' exact component={user}></Route>
          <Route path='/products' exact component={product}></Route>
          <Route component={DC}></Route>
        </Switch>
      </div>
    );
  };
};