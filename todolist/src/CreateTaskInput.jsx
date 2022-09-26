import React from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleTaskCreate = () => {
    if (this.state.value === '') {
      return null;
    }
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleTaskCreate}
          className="btn create-task__btn"
        >
          Create
        </button>
      </div>
    );
  }
}
CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default CreateTaskInput;
