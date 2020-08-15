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
    </div >
  );
}

export default App;




    //page splitt, icons circles, link icons, skill, add item fail to add on work and edu,
  // line on your position misssing, gmail to long get over text
  // adjust work edu icons
  //when addign more links they drop down to mach and work/edu links alsow 

  // kada se obrise sve iz inputa onda ostaje your nam do kraja bag neki 



  //https://vectorpaint.yaks.co.nz/