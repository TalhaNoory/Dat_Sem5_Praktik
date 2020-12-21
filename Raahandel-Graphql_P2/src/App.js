import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import home from './Components/Home';
import user from './Components/Users';
import product from './Components/Products';
import details from './Components/Details';
// import userinfo from './failures/UserInfo'
import DC from './Components/DefaultComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={home}></Route>
          <Route path='/users' component={user}></Route>
          <Route path='/products' component={product}></Route>
          <Route path='/details/:products/:id' component={details} />
          {/* <Route path='/userinfo/:id' component={userinfo} /> */}
          <Route component={DC}></Route>
        </Switch>
      </div>
    )
  }
};