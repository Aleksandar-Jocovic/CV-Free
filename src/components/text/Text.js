import React, { useState, Fragment, useRef } from 'react'

import './text.css'

const Text = ({ initialValue, textType }) => {

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(initialValue);

  const [inputStyle, setInputStyle] = useState('')

  const handleClick = () => {
    setInputStyle({
      height: `${textElement.current.clientHeight}px`,
      width: `${textElement.current.clientWidth + 20}px`
    })
    if (!edit) setEdit(!edit);
  }

  const textElement = useRef(null)
  const textArea = useRef(null)



  //close input on outside clikc
  window.addEventListener('click', (e) => {
    if (e.target.tagName !== "P" && e.target.tagName !== "TEXTAREA" && edit) {
      console.log(text)
      /* console.log(textArea.current.value) */
      if (text.length < 1) {
        setText('default')
        console.log('defa')
      };
      setEdit(!edit)
    }
  })

  return (
    <div className="text-wrap">
      {!edit ?
        <p
          ref={textElement}
          onClick={handleClick}
          className={`${textType} editable`}
        >{text}
        </p>
        :
        <Fragment>
          <textarea
            ref={textArea}
            className={`${textType}`}
            type="text"
            value={text}
            name={text}
            style={inputStyle}
            onChange={e => {
              setText(e.target.value);
              // if (e.target.value === '') {
              //   setText('opa')
              // }
              console.log(text)
            }}
          />
          {/*   <button
            className="check-button"
            onClick={() => {
                  if (text === '') setText('Your Nam');
                      setEdit(!edit)
            }}>go</button>
 */}
        </Fragment>
      }
    </div>
  )
}

export default Text
