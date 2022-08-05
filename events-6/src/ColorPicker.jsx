import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  setCoral = () => {
    this.setState({
      selector: (this.state.color = 'Coral'),
    });
  };

  setAqua = () => {
    this.setState({
      selector: (this.state.color = 'Aqua'),
    });
  };

  setBisque = () => {
    this.setState({
      selector: (this.state.color = 'Bisque'),
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseEnter={this.setCoral}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={this.setAqua}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={this.setBisque}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
