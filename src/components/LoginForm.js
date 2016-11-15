import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(event) {
    this.props.emailChanged(event.target.value);
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value);
  }

  onButtonPress(event) {
    event.preventDefault();
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={this.props.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.onPasswordChange.bind(this)}
            />
          </div>
          <button className="btn btn-default" onClick={this.onButtonPress.bind(this)}>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;
  return { email, password };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
