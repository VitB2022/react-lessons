import React, { Component } from 'react';

import User from './User.jsx';
import Filter from './Filter.jsx';

const textInput = (item, text) =>
  item.toLowerCase().includes(text.toLowerCase());

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleSetText = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const users = this.props.users
      .filter(({ name }) => textInput(name, this.state.filterText))
      .map(({ id, name, age }) => <User key={id} name={name} age={age} />);

    return (
      <div>
        <Filter count={users.length} onChange={this.handleSetText} />
        <ul className="users">{users}</ul>
      </div>
    );
  }
}
export default UsersList;
