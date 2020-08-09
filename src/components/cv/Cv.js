import React from 'react'
import Header from './Header'
import SideInfo from './SideInfo'
import MainSection from './MainSection'
import './cv.css'
import { Canvg } from 'canvg'

import { image } from '../../img/us.jpg'


import { Base64 } from 'js-base64'
import jsPDF from 'jspdf'

const Cv = () => {

  var doc = new jsPDF();




  // add education and work icon 
  const positionWorkEduIcon = (element, iconPath, correctionTop) => {
    var iconData = new Image()
    iconData.src = iconPath

    var icon = document.getElementById(element).getBoundingClientRect();
    var iconTop = icon.top / 5.1 + correctionTop;
    var iconLeft = icon.left / 3.8;
    console.log(iconTop, iconLeft)
    doc.addImage(iconData, 'png', iconLeft, iconTop, 5, 5)
  }

  //add images and save pdf
  const savePdf = () => {
    var img = new Image()
    img.src = document.getElementById('img').src


    doc.addHTML(document.getElementById('pdf'), function () {
      //doc.addImage(img, 'JPEG', 12, 67, 50, 50)

      positionWorkEduIcon("work-svg", "img/work.png", 6)
      positionWorkEduIcon("education-svg", "img/edu.png", 20)
      positionWorkEduIcon("skills-svg", "img/skill.png", 32)





      doc.save("CV.pdf");
    })

  }



  const save = () => {
    var svg = document.getElementById('svg-container').innerHTML;

    if (svg)
      svg = svg.replace(/\r?\n|\r/g, '').trim();

    var canvas = document.createElement('canvas');
    Canvg(canvas, svg);
    var imgData = canvas.toDataURL('image/png');
    // Generate PDF
    var doc = new jsPDF('p', 'pt', 'a4');
    doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
    doc.save('test.pdf');
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
      <div className="cir" style={{ borderRadius: "50%" }}></div>
    </div>
  )
}

export default Cv
