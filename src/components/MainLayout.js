import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './MainLayout.css';
import { logoutUser, modelsFetch } from '../actions';

class MainLayout extends Component {
  componentWillMount() {
    this.props.modelsFetch();
  }

  onLogoutPress() {
    event.preventDefault();
    this.props.logoutUser();
  }

  loggedInUser() {
    const user = this.props.user;
    if(!user) {
      return <li><Link to="/login">Login</Link></li>;
    }
    return <li><Link to="/" onClick={this.onLogoutPress.bind(this)}>Logout</Link></li>;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">FashionDB</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/models">Models</Link></li>
                <li><Link to="/agencies">Agencies</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {this.loggedInUser()}
              </ul>
              {/*<form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>*/}
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps, { logoutUser, modelsFetch })(MainLayout);
