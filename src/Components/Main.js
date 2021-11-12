import React from 'react'
import random from './images/ColorlessBitesizedKob-max-1mb.gif'
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
    const style = {
        color: "#868e96"
        

    }
    const style1 = {
        height: "1em",
        width: "1em",
        margin: "0px 0.05em 0px 0.1em" ,
        verticalAlign: "-0.1em"

    }
    AOS.init({
      duration:1000,
      delay:2
    })
    return (
        <>
      <div className="container main" data-aos="fade-right">
    <div className="skills-image">
     <img src={random} alt="" className="skills-image"/>
    </div>
    <div className="skills-content" data-aos="fade-left" id="skills">
      <h1 id="skills-head">What I Do</h1>
      <p style={style} id="skills-p">Experienced Front-End Developer, Freelancer, Full Stack Developer to be.</p>
      

        <div className="contain">

          <i className="fab fa-html5 fa-2x skills-icon"><p style={style}>Html5</p></i>
          <i className="fab fa-css3-alt fa-2x skills-icon"><p style={style}>Css3</p></i>
          <i className="fab fa-js fa-2x skills-icon"><p style={style}>Javascript</p></i>
          <i className="fab fa-react fa-2x skills-icon"><p style={style}>React js</p></i>
          <i className="fas fa-fire fa-2x skills-icon"><p style={style}>Firebase</p></i>
          <i className="fab fa-wordpress fa-2x skills-icon"><p style={style}>Wordpress</p></i>
          <i className="fab fa-bootstrap fa-2x skills-icon"><p style={style}>Bootstrap</p></i>
          <i className="fab fa-git-alt fa-2x skills-icon"><p style={style}>Git</p></i>
        </div>
     
        
      <p className="skills-content1"><img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="" style={style1}/>Develop highly interactive Front end/User Interfaces for your web apps and mobile-applications</p>
      <p className="skills-content1"><img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="" style={style1} />Converting UI designs perfectly into code</p>
      <p className="skills-content1"><img src="https://twemoji.maxcdn.com/2/72x72/26a1.png" alt="" style={style1}/>Integration of third party services such as firebase</p>
    </div>
  </div>
        </>
    )
}
