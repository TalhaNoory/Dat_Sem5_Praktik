import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import DC from './Components/DefaultComponent';

import { Switch, Route } from 'react-router-dom';
//1st import 'Switch' used for grouping a route
//2nd import 'Route' displaying the specific route

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    }
  };

  componentDidMount() {
    const query = `
          query {
            allUsers {
              mail
              id
              name
              role
          }
        }`;

    const url = "http://localhost:3000/graphql";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    fetch(url, opts)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          user: result.data.allUsers
        })
      })
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={DC}></Route>
        </Switch>
      </div>
    );
  }
};

export default App;
