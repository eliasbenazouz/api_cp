import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {

  return (
    <div className="app">
      <div className="app_elements">
        <h1 className="float__h1">Credits:</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
