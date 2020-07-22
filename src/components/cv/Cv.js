import React from 'react'
import Text from '../text/Text'

import './cv.css'

const Cv = () => {

  const name = 'Your Name'

  const position = 'Your Position'

  return (
    <div className="pdf">
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
    </div>
  )
}

export default Cv
