import React from 'react';

const Spinner = props => {
  const { size } = props;

  return <span class="spinner" style={{ width: size, height: size }}></span>;
};

export default Spinner;
