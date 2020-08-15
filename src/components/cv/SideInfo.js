import React, { useState, useRef } from 'react'
import Text from '../text/Text'
import Link from './Link.js'
import './sideInfo.css'


const SideInfo = ({ links, setLinks, displayLinks }) => {

  // const [links, setLinks] = useState([
  //   {
  //     id: 0,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //         <path
  //           d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
  //       </svg>,
  //     text: 'linkedin',
  //     url: 'https://www.linkedin.com/in/aleksandar-jo%C4%8Dovi%C4%87-a402141a8/'
  //   },
  //   {
  //     id: 1,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //         <path
  //           d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  //       </svg>,
  //     text: 'github',
  //     url: 'https://github.com/Aleksandar-Jocovic'
  //   },
  //   {
  //     id: 2,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //         <path
  //           d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
  //       </svg>,
  //     text: 'website',
  //     url: 'https://festive-kalam-61b6e7.netlify.app/'
  //   },
  //   {
  //     id: 3,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></svg>,
  //     text: 'twitter',
  //     url: 'https://festive-kalam-61b6e7.netlify.app/'
  //   },
  //   {
  //     id: 4,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>,
  //     text: 'facebook',
  //     url: 'https://festive-kalam-61b6e7.netlify.app/'
  //   },
  //   {
  //     id: 5,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" /></svg>,
  //     text: 'instagram',
  //     url: 'https://festive-kalam-61b6e7.netlify.app/'
  //   },
  //   {
  //     id: 6,
  //     icon:
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.918 13.933h.706v3.795h-.706v-.419c-.13.154-.266.272-.405.353-.381.218-.902.213-.902-.557v-3.172h.705v2.909c0 .153.037.256.188.256.138 0 .329-.176.415-.284v-2.881zm.642-4.181c.2 0 .311-.16.311-.377v-1.854c0-.223-.098-.38-.324-.38-.208 0-.309.161-.309.38v1.854c-.001.21.117.377.322.377zm-1.941 2.831h-2.439v.747h.823v4.398h.795v-4.398h.821v-.747zm4.721 2.253v2.105c0 .47-.176.834-.645.834-.259 0-.474-.094-.671-.34v.292h-.712v-5.145h.712v1.656c.16-.194.375-.354.628-.354.517.001.688.437.688.952zm-.727.043c0-.128-.024-.225-.075-.292-.086-.113-.244-.125-.367-.062l-.146.116v2.365l.167.134c.115.058.283.062.361-.039.04-.054.061-.141.061-.262v-1.96zm10.387-2.879c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10.746-2.251c0 .394.12.712.519.712.224 0 .534-.117.855-.498v.44h.741v-3.986h-.741v3.025c-.09.113-.291.299-.436.299-.159 0-.197-.108-.197-.269v-3.055h-.741v3.332zm-2.779-2.294v1.954c0 .703.367 1.068 1.085 1.068.597 0 1.065-.399 1.065-1.068v-1.954c0-.624-.465-1.071-1.065-1.071-.652 0-1.085.432-1.085 1.071zm-2.761-2.455l.993 3.211v2.191h.835v-2.191l.971-3.211h-.848l-.535 2.16-.575-2.16h-.841zm10.119 10.208c-.013-2.605-.204-3.602-1.848-3.714-1.518-.104-6.455-.103-7.971 0-1.642.112-1.835 1.104-1.848 3.714.013 2.606.204 3.602 1.848 3.715 1.516.103 6.453.103 7.971 0 1.643-.113 1.835-1.104 1.848-3.715zm-.885-.255v.966h-1.35v.716c0 .285.024.531.308.531.298 0 .315-.2.315-.531v-.264h.727v.285c0 .731-.313 1.174-1.057 1.174-.676 0-1.019-.491-1.019-1.174v-1.704c0-.659.435-1.116 1.071-1.116.678.001 1.005.431 1.005 1.117zm-.726-.007c0-.256-.054-.445-.309-.445-.261 0-.314.184-.314.445v.385h.623v-.385z" /></svg>,
  //     text: 'youtube',
  //     url: 'https://festive-kalam-61b6e7.netlify.app/'
  //   }
  // ])

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
    dateOfBirth: '1st march 1998',
    nationality: 'Niggerian',
    languages: 'Serbian Englis',
    mobile: '+323 23 23',
    email: 'mike1234567890@gmail.com',
    address: 'adress 22 22',
    skype: 'skype: 3232'
  }

  return (
    <div className="sideInfo">

      <div className="image">
        <img src="./profile.png" alt="" id="img" />
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
          <li>Name<p className='fakeBlankSpace'>..</p>
            <Text initialValue={values.name} textType="listText" />
          </li>
          <li>Birthday<p className='fakeBlankSpace'>.....</p>
            <Text initialValue={values.dateOfBirth} textType="listText" />
          </li>
          <li>Nationality<p className='fakeBlankSpace'>.</p>
            <Text initialValue={values.nationality} textType="listText" />
          </li>
          <li>Languages
            <Text initialValue={values.languages} textType="listText" />
          </li>
        </ul>
      </div>

      <div className="contact-list">
        <h3 className="sectionTitle">Contact</h3>
        <ul>
          <li>Mobile<p className='fakeBlankSpace'>.....</p>
            <Text initialValue={values.mobile} textType="listText" />
          </li>
          <li>Email<p className='fakeBlankSpace'>.....</p>
            <Text initialValue={values.email} textType="listText" />
          </li>
          <li>Skype<p className='fakeBlankSpace'>.....</p>
            <Text initialValue={values.skype} textType="listText" />
          </li>
          <li>Adress<p className='fakeBlankSpace'>.....</p>
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
