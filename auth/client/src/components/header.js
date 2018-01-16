import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <Link className="nav-item" to="signout">Sign out</Link>
      );
    } else {
      // show a link to sign in or sign up
      return [
        <li key={1}>
          <Link className="nav-item" to="signin">Sign In</Link>
        </li>,
        <li key={2}>
          <Link className="nav-item" to="signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
