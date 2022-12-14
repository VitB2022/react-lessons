import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Logout onLogout={this.handleLogout} />;
    } else {
      button = <Login onLogin={this.handleLogin} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
