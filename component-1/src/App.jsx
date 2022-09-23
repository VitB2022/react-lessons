import React from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

export default class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ number: this.state.number + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <OddNumbers number={this.state.number} title="Odd number" />
        <EvenNumbers number={this.state.number} title="Even number" />
        <Numbers number={this.state.number} title="All numbers" />
        <Numbers />
      </div>
    );
  }
}
