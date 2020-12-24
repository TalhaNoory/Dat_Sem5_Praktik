import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './Firebase/utils';
import { setCurrentUser } from './Redux/User/user.action';

import './default.scss';

//Layouts
import MainLayout from './Layout/MainLayout';
import HomepageLayout from './Layout/HomepageLayout';

//Pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';
import Login from './pages/Login/index';
import Recovery from './pages/Recovery/index';

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      };

      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount() {
    this.authListener();
  };

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path='/registration'
            render={() => currentUser ? <Redirect to='/' /> : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )} />
          <Route path='/login'
            render={() => currentUser ? <Redirect to='/' /> : (
              <MainLayout>
                <Login />
              </MainLayout>
            )} />
          <Route path='/recovery' render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )} />
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);