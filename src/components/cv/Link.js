import React, { useState, Fragment } from 'react'

const Link = ({ link, setLinks, deleteLinkItem, links }) => {
  const [editLink, setEditLink] = useState(false)

  const [linkURL, setLinkURL] = useState(link.url)

  const changeLinkUrl = () => {
    const newLinks = links.map(item => {
      if (item.id === link.id) {
        item.url = linkURL
      }
      return item
    })
    setLinks(newLinks)
  }


  return (
    <div key={link.text} className="link">
      {link.icon}
      {!editLink ?
        <a
          href={`${link.url}`}
          rel="noreferrer"
          target="_blank"
          onClick={() => { }}
        >
          {link.text}
        </a>
        :
        <Fragment>
          <input
            type="text"
            value={linkURL}
            onChange={e => setLinkURL(e.target.value)}
          />
          <button
            className="check-button"
            onClick={() => {
              setEditLink(!editLink)
              changeLinkUrl()
            }}
          >go
          </button>
        </Fragment>
      }

      <button
        className="delete-item-button"
        name={link.id}
        value={link.id}
        onClick={deleteLinkItem}
      >x</button>
      {!editLink &&
        <button
          className="edit-item-button"
          name={link}
          value={link}
          onClick={() => setEditLink(!editLink)}
        >edit
      </button>
      }
    </div>
  )
}

export default Link
