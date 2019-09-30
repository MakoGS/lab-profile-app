import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import LogOutView from "./views/LogOutView";
import LoggedInView from "./views/LoggedInView";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    // this.signOut = this.signOut.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }
  loadUser(user) {
    this.setState({
      user
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route
              path="/auth/signup"
              render={props => (
                <SignUp {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/auth/login"
              render={props => (
                <LogIn {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route path="/auth/logout" component={LogOutView} />
            <Route path="/auth/loggedin" component={LoggedInView} />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
