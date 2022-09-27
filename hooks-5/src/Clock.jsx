import React, { useEffect, useState } from 'react';
import moment from 'moment';

import getTimeWithOffset from './getTimeWithOffset.jsx';

const Clock = ({ location, offset }) => {
  const [date, setDate] = useState(
    moment(getTimeWithOffset(offset)).format('h:mm:ss A')
  );

  useEffect(() => {
    let timerId = setInterval(
      () => setDate(moment(getTimeWithOffset(offset)).format('h:mm:ss A')),
      1000
    );
    return () => clearInterval(timerId);
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date}</div>
    </div>
  );
};
export default Clock;
