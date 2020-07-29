import React from 'react'
import Text from '../text/Text'
import Header from './Header'
import SideInfo from './SideInfo'
import MainSection from './MainSection'
import './cv.css'

import jsPDF from 'jspdf'

const Cv = () => {

  var doc = new jsPDF();
  //var pdf = document.getElementById('pdf');

  // doc.addHTML(pdf), function () {
  //   doc.save("teste.pdf");
  // }

  const savePdf = () => {
    doc.addHTML(document.getElementById('pdf'), function () {
      doc.save("teste.pdf");
    })
  }

  return (
    <div id="pdf">
      <Header />
      <div style={{ display: 'flex' }}>
        <SideInfo />
        <MainSection />
      </div>
      <button onClick={savePdf}>download</button>
    </div>
  )
}

export default Cv
