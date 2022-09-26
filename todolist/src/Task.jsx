import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="list-item__delete-btn"
      ></button>
    </li>
  );
};
Task.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
Task.defaultProps = {
  done: false,
  text: 'Some text',
};
export default Task;
