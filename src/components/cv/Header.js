import React from 'react'
import Text from '../text/Text'

import './header.css'
const Header = () => {

  const name = 'Your Name'
  const position = 'Your Position'

  return (
    <div className="header">
      <Text
        initialValue={name}
        textType="name"
      />
      <div className="position-wrap">
        <div className="dash-on-position"></div>
        <Text
          initialValue={position}
          textType="position"
        />
        <div className="dash-on-position"></div>
      </div>

    </div>
  )
}

export default Header
