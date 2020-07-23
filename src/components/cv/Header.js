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
      <Text
        initialValue={position}
        textType="position"
      />
    </div>
  )
}

export default Header
