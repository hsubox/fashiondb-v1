import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { loginFormUpdate, loginUser } from '../actions';

class LoginForm extends Component {
  onButtonPress(event) {
    event.preventDefault();
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    const {
      email,
      password,
      loginFormUpdate
    } = this.props;
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
              value={email}
              onChange={(event) => loginFormUpdate('email', event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => loginFormUpdate('password', event.target.value)}
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
  loginFormUpdate,
  loginUser
})(LoginForm);
