import React, { useState } from 'react'
import './sideBar.css'
import template from '../../img/template.png'
const SideBar = () => {

  const [activeColor, setActiveColor] = useState('rgb(32, 38, 49)')


  let root = document.documentElement;
  const changeTemplateColor = (e, color) => {
    console.log('a')
    root.style.setProperty('--dark', color);
    setActiveColor(color)
  }

  const getActivePaleteStyle = (color) => {
    if (color === activeColor) {
      return {
        border: '2px solid rgb(255, 255, 255)',
        transform: 'scale(1.3)',
        position: 'relative',
        top: '-2px'
      }
    }
  }

  return (
    <div className="sideBar">
      <p>template color</p>

      <div className="colors-pallete">

        <button
          name='rgb(32, 38, 49)'
          style={getActivePaleteStyle('rgb(32, 38, 49)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(32, 38, 49)')}
        ></button>


        <button
          style={getActivePaleteStyle('rgb(11, 21, 53)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(11, 21, 53)')}
        ></button>

        <button
          style={getActivePaleteStyle('rgb(34, 2, 71)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(34, 2, 71)')}
        ></button>

        <button
          style={getActivePaleteStyle('rgb(0, 0, 0)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(0, 0, 0)')}
        ></button>

        <button
          style={getActivePaleteStyle('rgb(53, 25, 25)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(53, 25, 25)')}
        ></button>

        <button
          style={getActivePaleteStyle('rgb(66, 126, 10)')}
          className="color"
          onClick={e => changeTemplateColor(e, 'rgb(66, 126, 10)')}
        ></button>
      </div>
      <img src={template} alt="template" className="active-template" />

    </div>
  )
}

export default SideBar
