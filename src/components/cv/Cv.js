import React from 'react'
import Header from './Header'
import SideInfo from './SideInfo'
import MainSection from './MainSection'
import './cv.css'

import { image } from '../../img/us.jpg'


import { Base64 } from 'js-base64'
import jsPDF from 'jspdf'

const Cv = () => {

  var doc = new jsPDF();

  const savePdf = () => {
    var img = new Image()
    img.src = document.getElementById('img').src

    doc.addHTML(document.getElementById('pdf'), function () {
      doc.addImage(img, 'JPEG', 12, 67, 50, 50)

      doc.save("CV.pdf");
    })

  }

  const save = () => {

    console.log(document.getElementById('img').type)
  }


  return (
    <div id="pdf">
      <Header />
      <div style={{ display: 'flex' }}>
        <SideInfo />
        <MainSection />
      </div>
      <button onClick={savePdf}>download</button>
      <button onClick={save}>save</button>
      <div className="cir"></div>
    </div>
  )
}

export default Cv
