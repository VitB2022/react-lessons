import React from 'react';
import moment from 'moment';

import './index.scss';

const formatDate = date =>
  moment().format('YYYY') - moment(date).format('YYYY');

function Greeting(props) {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${formatDate(props.birthDate)} years old`}</div>
  );
}

export default Greeting;
