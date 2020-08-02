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
  //var pdf = document.getElementById('pdf');

  // doc.addHTML(pdf), function () {
  //   doc.save("teste.pdf");
  // }



  /* problem je samo da se slika enkodira ako je encode online onda radi */

  const savePdf = () => {
    var img = new Image()
    img.src = 'src/img/us.jpg'


    // var encode = Base64.encode('http://localhost:3000/us.jpg')


    // var imgData = 'data:image/jpeg;base64,' + Base64.encode(image)

    // console.log(imgData)

    //var i = document.getElementById('img')


    doc.addHTML(document.getElementById('pdf'), function () {
      doc.addImage(document.getElementById('img'), 'JPEG', 10, 30, 50, 50)

      doc.save("teste.pdf");
    })

  }

  const save = () => {
    var img = new Image()
    img.src = 'im.jpg'
    doc.addImage("/img/im.jpg", 'JPEG', 10, 30, 50, 50)

    setTimeout(() => {
      doc.save("teste.pdf");

    }, 3000)

  }

  return (
    <div id="pdf">
      <Header />
      <div style={{ display: 'flex' }}>
        <SideInfo />
        <MainSection />
      </div>
      <button onClick={savePdf}>download</button>
      <button onClick={save}>download</button>

    </div>
  )
}

export default Cv
