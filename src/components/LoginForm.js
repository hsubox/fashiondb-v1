import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './LoginForm.css';
import { loginFormUpdate, loginUser } from '../actions';
import { InputTextField } from './common';

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
          <InputTextField fieldName="Email" placeholder="Email" value={email} onChange={loginFormUpdate}/>
          <InputTextField type="password" placeholder="Password" fieldName="Password" value={password} onChange={loginFormUpdate}/>
          <Link onClick={this.onButtonPress.bind(this)} className="btn btn-default">Login</Link>
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
