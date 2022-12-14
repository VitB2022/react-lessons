import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={500} />
      <Counter start={0} interval={1500} />
    </>
  );
};

export default App;
