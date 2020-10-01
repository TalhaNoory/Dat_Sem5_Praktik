import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {Switch, Route} from 'react-router-dom';
import user from './Components/Users';
import product from './Components/Products';
import DC from './Components/DefaultComponent';
import home from './Components/Home';
import details from './Components/Details';

export default class App extends Component {
  render() {
    // console.log(this.state.user)
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={home}></Route>
          <Route path='/users' component={user}></Route>
          <Route path='/products' component={product}></Route>
          <Route path='/products/details' component={details}></Route>
          <Route component={DC}></Route>
        </Switch>
      </div>
    )
  }
};