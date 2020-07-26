import React from 'react'
import './mainSection.css'
import Text from '../text/Text'

const MainSection = () => {

  const values = {
    profile: 'About 2 years ago I became interested in web development, so I started learning from online sources. I am very motivated and excited to learn new technologies. I enyoy learning proccess and admire clever solutions programers',
    title: 'name of work place',
    position: 'CNC Operater',
    time: 'Sep 2001 - Oct 2020',
    description: 'Appple is great factory of mobile phones that are expensive like to expeensive to by by human only.'
  }
  return (
    <section>
      <div className="profile">
        <h3 className="sectionTitle">profile</h3>
        <Text initialValue={values.profile} textType="listText" />
      </div>

      <div className="work">
        <div className="vertical-line"></div>
        <div className="about-me-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
          </svg>
          <h3 className="sectionTitle">Work</h3>
        </div>

        <div className="work-item">
          <svg className="white-circle" height="15" width="15">
            <circle cx="7.5" cy="7.5" r="5.5" stroke="rgb(32, 38, 49)" stroke-width="2" fill="rgb(231, 231, 231)" />
          </svg>
          <Text initialValue={values.title} textType='work-edu-title' />
          <div className="work-edu-position-time">
            <svg height="4" width="4">
              <circle cx="2" cy="2" r="2" fill="rgb(32, 38, 49)" />
            </svg>
            <Text initialValue={values.position} textType="work-edu-position" />
            <svg height="4" width="4">
              <circle cx="2" cy="2" r="2" fill="rgb(32, 38, 49)" />
            </svg>
            <Text initialValue={values.time} textType="work-edu-time" />
          </div>
          <div style={{ display: 'flex', marginLeft: '30px' }}>
            <span>-</span><Text initialValue={values.description} textType="work-edu-description" />
          </div>
        </div>

        <div className="work-item">
          <svg height="15" width="15">
            <circle cx="7.5" cy="7.5" r="5.5" stroke="rgb(32, 38, 49)" stroke-width="2" fill="rgb(231, 231, 231)" />
          </svg>
          <h4>Ajdaca Alati, Čačak Serbia</h4>
          <h5>&#8226; CNC Operater &#8226;<span>Sep 2017 - Jan 2020</span></h5>
          <p>- Ajdača alati is a company engaged in the production and
          maintenance of tools in which I work as an operator on CNC machines.
          </p>
        </div>

        <div className="work-item">
          <svg height="15" width="15">
            <circle cx="7.5" cy="7.5" r="5.5" stroke="rgb(32, 38, 49)" stroke-width="2" fill="rgb(231, 231, 231)" />
          </svg>
          <div className="vertical-line-mask"></div>
          <h4>Fabrika Reznog Alata, Čačak Serbia</h4>
          <h5>&#8226; Machine Operater &#8226;<span>Jun, 2012 - July 2017</span></h5>
          <p>- Fabrika reznog alata is a state-owned factory tool
            manufacturing plant where I worked as a machine operator.</p>
        </div>

      </div>

      <div className="work">

        <div className="about-me-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z" />
          </svg>
          <h3 className="sectionTitle">education</h3>
        </div>

        <div className="work-item">
          <svg height="15" width="15">
            <circle cx="7.5" cy="7.5" r="5.5" stroke="rgb(32, 38, 49)" stroke-width="2" fill="rgb(231, 231, 231)" />
          </svg>
          <h4>High School Tehnicka Skola Cacak</h4>
          <h5>&#8226; Automatic Tehnician &#8226;<span>Aug, 2019 - till now</span></h5>
        </div>
      </div>

      <div className="skills">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z" />
        </svg>
        <h3 className="sectionTitle">skills</h3>
        <div className="skills-items">
          <div className="skills-item">
            <h4>HTML 5</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>CSS3</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>JAVASCRIPT</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>BOOTSTRAP 4</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>REACT</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>SCSS</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>git / seo</h4>
            <div className="progress"></div>
          </div>
          <div className="skills-item">
            <h4>gimp 2.10</h4>
            <div className="progress"></div>
          </div>
        </div>
        <h4>Skills i'm familiar with and learning at the moment: Node.js, Express, MongoDb,</h4>
      </div>
    </section>
  )
}

export default MainSection
