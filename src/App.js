import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import WorkSpace from './components/workspace/WorkSpace'
import SideBar from './components/sideBar/SideBar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <WorkSpace />
        <SideBar />
      </div>
      <footer>2020 copright CV free</footer>
    </div >
  );
}

export default App;




  //page splitt
  // gmail to long get over text
  // adjust work edu icons
  //when addign more links they drop down to mach and work/edu links alsow 




  //https://vectorpaint.yaks.co.nz/