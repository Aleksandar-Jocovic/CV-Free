import React from 'react'
import Text from '../text/Text'
import Header from './Header'
import SideInfo from './SideInfo'
import MainSection from './MainSection'
import './cv.css'

const Cv = () => {

  return (
    <div className="pdf">
      <Header />
      <div style={{ display: 'flex' }}>
        <SideInfo />
        <MainSection />
      </div>
    </div>
  )
}

export default Cv
