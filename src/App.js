import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
