import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo2.jpg";

interface State {
  switched: boolean;
  disabled: boolean;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default class Login extends Component {

  private static username: string | undefined;
  private static password: string | undefined;
  private static email: string | undefined;
  private static confirm: string | undefined;

  state: State = {
    switched: false,
    disabled: true,
  };

  render = (): JSX.Element => {
    return (
      <div className="Login_root">
        {this.amazonLogo}
        {this.getForm()}
        {this.state.switched ? this.loginButton : this.createNewButton}
      </div>
    );
  };

  handleUsername = (event: ChangeEvent): void => {
    Login.username = event.target.value;
    this.handleDisabled();
  };

  handleEmail = (event: ChangeEvent): void => {
    Login.email = event.target.value;
    this.handleDisabled();
  };

  handlePassword = (event: ChangeEvent): void => {
    Login.password = event.target.value;
    this.handleDisabled();
  };

  handleConfirm = (event: ChangeEvent): void => {
    Login.confirm = event.target.value;
    this.handleDisabled();
  };

  handleLogin = (): void => {
    this.setState({
      switched: this.state.switched ? false : this.state.switched,
    })
    if (Login.email && Login.password) {
      console.log(`user loged`)
      console.log(Login.email, Login.password);
      Login.username = Login.email = Login.password = Login.confirm = undefined;
      return;
    };
    console.log("invalid details. user was not logedin");
  }

  handleCreateNewAccount = (): void => {
    this.setState({
      switched: !this.state.switched ? true : this.state.switched,
    })
    this.validate();
  };

  validate = (): void => {
    if (
      Login.username &&
      Login.email &&
      Login.password &&
      Login.password === Login.confirm
    ) {
      console.log(`new account created`);
      console.log(Login.password, Login.email, Login.password);
      return
    }
    console.log("invalid details. new account was not created");
  }

  handleDisabled = (): void => {
    const switched = this.state.switched;
    const isPasswordsEqual = Login.password !== Login.confirm;
    const logicCircuits = [
      (!switched || !Login.email || !Login.password) &&
      (!Login.username || !Login.email || !Login.password),
      switched && isPasswordsEqual,
    ];
    logicCircuits.forEach((circuit) => null);
  };

  amazonLogo: JSX.Element = (
    <Link to="/">
      <img className="Login_image" src={logo} alt="amazon logo" />
    </Link>
  );

  userNameField: JSX.Element = (
    <div >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={Login.username}
        onChange={this.handleUsername}
        className="Login_item"
      />
    </div>
  );

  emailField: JSX.Element = (
    <div>
      <label htmlFor="email">Email address</label>
      <input type="email" id="email" onChange={this.handleEmail} className="Login_item" />
    </div>
  );

  passwordField: JSX.Element = (
    <div >
      <label htmlFor="password">Password </label>
      <input type="password" id="password" onChange={this.handlePassword} className="Login_item" />
    </div>
  );

  confirmPasswordField: JSX.Element = (
    <div >
      <label htmlFor="confirm">Confirm password</label>
      <input
        type="password"
        id="confirm"
        onChange={this.handleConfirm}
        className="Login_item"
      />
    </div>
  );

  loginButton: JSX.Element = (
    <button
      className="Login_item Login_secondary"
      onClick={this.handleLogin}>
      Login
    </button>
  );

  createNewButton: JSX.Element = (
    <button className="Login_item Login_primary" onClick={this.handleCreateNewAccount}>
      Create New Account
    </button>
  );

  getForm = (): JSX.Element => (
    <div className="Login_form">
      {this.state.switched && this.userNameField}
      {this.emailField}
      {this.passwordField}
      {this.state.switched && this.confirmPasswordField}
      {this.state.switched ? this.createNewButton : this.loginButton}
    </div>
  );

  getUsername = (): string | undefined => {
    return Login.username;
  }

  getEmail = (): string | undefined => {
    return Login.email;
  }

  resetPassword = (currentPassword: string, newPassword: string): boolean => {
    if (currentPassword === Login.password) {
      Login.password = newPassword;
      return true;
    }
    return false;
  }
}
