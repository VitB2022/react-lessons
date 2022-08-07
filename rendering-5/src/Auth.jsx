import React, { Component } from 'react';

import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  state = {
    isLoggedIn: false,
    spinnerLoad: false,
  };

  onLogin = () => {
    this.setState({ spinnerLoad: true });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        spinnerLoad: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.spinnerLoad) {
      return <Spinner size={'50px'} />;
    }

    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );
  }
}
export default Auth;
