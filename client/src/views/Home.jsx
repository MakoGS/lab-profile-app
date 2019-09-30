import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>MERN APP BOILERPLATE</h1>
        <Link to={"/auth/signup"}>Sign Up</Link>
        <br />
        <Link to={"/auth/login"}>Login</Link>
      </div>
    );
  }
}
