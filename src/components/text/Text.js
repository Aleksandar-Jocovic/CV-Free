import React, { useState, Fragment } from 'react'

import './text.css'

const Text = ({ initialValue, textType }) => {

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(initialValue);

  const handleClick = () => {
    if (!edit) setEdit(!edit);

  }

  return (
    <div>
      {!edit ?
        <p onClick={handleClick} className={`${textType} editable`}>{text}</p>
        :
        <Fragment>
          <input
            type="text"
            value={text}
            name={text}

            onChange={e => {
              setText(e.target.value);
              console.log(text)
            }}
          />
          <button
            className="check-button"
            onClick={() => {
              if (text === '') setText('Your Nam');
              setEdit(!edit)
              console.log(text)

            }}>go</button>
        </Fragment>
      }
    </div>
  )
}

export default Text
