import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signIn as signInService } from "../services/authentication-api";
import Container from "react-bootstrap/Container";

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "number"
        ? event.target.valueAsNumber
        : event.target.value;
    this.setState({
      [name]: value
    });
  }

  signIn(event) {
    event.preventDefault();
    const { email, password } = this.state;
    signInService({ email, password })
      .then(user => {
        this.props.loadUser(user);
        this.props.history.push("/auth/loggedin");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <h1>LOG IN</h1>
        <Form onSubmit={this.signIn}>
          <Form.Group>
            <Form.Label htmlFor="sign-up-email">Email</Form.Label>
            <Form.Control
              id="sign-up-email"
              name="email"
              required
              type="email"
              placeholder="Email"
              onChange={this.onValueChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="sign-up-password">Password</Form.Label>
            <Form.Control
              id="sign-up-password"
              name="password"
              required
              type="password"
              placeholder="Password"
              onChange={this.onValueChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Sign In</Button>
        </Form>
      </Container>
    );
  }
}
