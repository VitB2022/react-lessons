import React, { useState } from 'react';
import Clock from './Clock.jsx';

import './index.scss';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <>
          <Clock location="New York" offset={-4} />
          <Clock location="Kyiv" offset={3} />
          <Clock location="London" offset={1} />
        </>
      )}
    </>
  );
};
export default App;
