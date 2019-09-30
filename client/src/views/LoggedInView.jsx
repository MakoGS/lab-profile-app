import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { signIn as signInService } from "../services/authentication-api";

export default class LoggedInView extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS YOUR PROFILE</h1>
      </div>
    );
  }
}
