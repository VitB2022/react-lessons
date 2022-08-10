import React from 'react';

import Offline from './Offline.jsx';
import Online from './Online.jsx';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.NetworkStatus);
    window.addEventListener('offline', this.NetworkStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.NetworkStatus);
    window.removeEventListener('offline', this.NetworkStatus);
  }

  NetworkStatus = event => {
    this.setState({ status: event.type });
  };

  render() {
    if (this.state.status === 'online') {
      return <Online />;
    }

    return <Offline />;
  }
}
export default ConnectionStatus;
