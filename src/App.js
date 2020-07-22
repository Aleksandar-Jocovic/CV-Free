import React from 'react';
import './App.css';
import Name from './components/Name'
import Navbar from './components/navbar/Navbar'
import WorkSpace from './components/workspace/WorkSpace'


function App() {
  return (
    <div className="App">
      <Navbar />
      <WorkSpace />
    </div >
  );
}

export default App;
