import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  togglerHandler = () => {
    console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.togglerHandler} className="expand__toggle-btn">
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="expand__content">
          {this.state.isOpen && this.props.children}
        </div>
      </div>
    );
  }
}
export default Expand;
// ({ isOpen, togglerHandler, children, title })
