import React, { useState, useRef } from 'react'
import Text from '../text/Text'
import Link from './Link.js'
import profileImage from '../../img/profile.png'
import './sideInfo.css'


const SideInfo = ({ links, setLinks, displayLinks }) => {

  const [chosedLinks, setChosedLinks] = useState([0, 1, 2]);
  const [addLink, setAddLink] = useState(false)


  // fake click to style button
  const realFileBtn = useRef();

  const uploadImage = () => {
    realFileBtn.current.click()
    document.querySelector('input[type="file"]').addEventListener('change', function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]);
      }
    });
  }


  const addItemToChosedLinks = e => {
    setChosedLinks([...chosedLinks, +e.target.name])
    console.log(document.getElementById('img').src)

  }

  const deleteLinkItem = e => {
    let links = chosedLinks.filter(link => link !== +e.target.value)
    setChosedLinks(links)
  }

  const values = {
    name: 'Your name',
    dateOfBirth: '1st May 1999.',
    nationality: 'Your Nationality',
    languages: 'Serbian English',
    mobile: '+323 23 23 23',
    email: 'mike10@gmail.com',
    address: 'adress 22/22',
    skype: 'skype: 3232'
  }

  return (
    <div className="sideInfo">

      <div className="image">
        <img src={profileImage} alt="profile image" id="img" />
        <input type="file" ref={realFileBtn} />
        <button
          className="custom-file-button"
          onClick={uploadImage}
        >Upload Image
        </button>
      </div>
      <div className="info-list">
        <h3 className="sectionTitle">Personal</h3>
        <ul>
          <li>Name<p className='fakeBlankSpace'>..............</p>
            <Text initialValue={values.name} textType="listText" />
          </li>
          <li>Birthday<p className='fakeBlankSpace'>..........</p>
            <Text initialValue={values.dateOfBirth} textType="listText" />
          </li>
          <li>Nationality<p className='fakeBlankSpace'>....</p>
            <Text initialValue={values.nationality} textType="listText" />
          </li>
          <li>Languages<p className='fakeBlankSpace'>...</p>
            <Text initialValue={values.languages} textType="listText" />
          </li>
        </ul>
      </div>

      <div className="contact-list">
        <h3 className="sectionTitle">Contact</h3>
        <ul>
          <li>Mobile<p className='fakeBlankSpace'>............</p>
            <Text initialValue={values.mobile} textType="listText" />
          </li>
          <li>Email<p className='fakeBlankSpace'>..............</p>
            <Text initialValue={values.email} textType="listText" />
          </li>
          <li>Skype<p className='fakeBlankSpace'>..............</p>
            <Text initialValue={values.skype} textType="listText" />
          </li>
          <li>Adress<p className='fakeBlankSpace'>............</p>
            <Text initialValue={values.address} textType="listText" />
          </li>
        </ul>
      </div>

      <div className="links-list">
        <h3 className="sectionTitle">links</h3>
        <div id="link-items">
          {chosedLinks.map(id => (
            <Link
              key={id}
              link={links[id]}
              setLinks={setLinks}
              links={links}
              deleteLinkItem={deleteLinkItem}
              displayLinks={displayLinks}
            />
          ))}
        </div>
        <button
          className="add-item-button"
          onClick={() => setAddLink(!addLink)}
        >add link</button>
        {addLink &&
          <div className="addLinkTable">
            <button
              className="delete-item-button"
              onClick={() => setAddLink(!addLink)}
            >x</button>
            {links.map(item => (
              <button
                className="add-link-icon"
                name={item.id}
                onClick={addItemToChosedLinks}
              >{item.icon}</button>
            ))}

          </div>
        }
      </div>

    </div >
  )
}

export default SideInfo
