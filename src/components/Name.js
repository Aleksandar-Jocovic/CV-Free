import React, { useState, Fragment } from 'react'

const Name = ({ initialValue }) => {

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(initialValue);

  const handleClick = () => {
    if (!edit) setEdit(!edit);

  }

  return (
    <div>
      {!edit ?
        <p onClick={handleClick}>{name}</p>
        :
        <Fragment>
          <input
            type="text"
            value={name}
            name={name}

            onChange={e => {
              setName(e.target.value);
              console.log(name)
            }}
          />
          <button onClick={() => {
            if (name === '') setName('Your Nam');
            setEdit(!edit)
            console.log(name)

          }}>go</button>
        </Fragment>
      }
    </div>
  )
}

export default Name
