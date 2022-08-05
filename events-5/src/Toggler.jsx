import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick} className="toggler">
        {this.state.isToggleOn ? 'Off' : 'On'}
      </div>
    );
  }
}
export default Toggler;
