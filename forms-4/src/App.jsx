import React from 'react';

import UsersList from './UsersList.jsx';
import './index.scss';

const users = [
  { age: 35, name: 'Tad', id: 1 },
  { age: 20, name: 'Anna', id: 2 },
  { age: 37, name: 'Jim', id: 3 },
  { age: 19, name: 'John', id: 4 },
  { age: 25, name: 'Tom', id: 5 },
];

const App = () => <UsersList users={users} />;

export default App;
