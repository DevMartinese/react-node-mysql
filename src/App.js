import React, { Component  } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.css'

// Firebase


// Import Components
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/Login" />
          <Switch>
            <Route
              exact
              path="/Login"
              render={() => <Login />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
