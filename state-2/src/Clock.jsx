import React, { Component } from 'react';
import moment from 'moment';

import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset),
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      date: moment(getTimeWithOffset(props.offset)).format('h:mm:ss A'),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.score(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  score() {
    this.setState({
      date: moment(getTimeWithOffset(this.state.offset)).format('h:mm:ss A'),
    });
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
