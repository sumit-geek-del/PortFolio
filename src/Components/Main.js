import React from 'react'
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';
import Lottie from 'react-lottie';
import animationData from '../animations/40851-pentagram-skills-of-deth.json';

export default function Main() {
    const style = {
        color: "#868e96",
        fontSize:'10px',
        marginTop:'10px',
        fontFamily: 'Montserrat, sans-serif'
        

    }
    const style1 = {
        height: "1em",
        width: "1em",
        margin: "0px 0.05em 0px 0.1em" ,
        verticalAlign: "-0.1em"

    }

    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
    AOS.init({
      duration:1000,
      delay:2
    })
    return (
        <>
    <div className="container main" data-aos="fade-right">
    <div className='row'>
      <div className='col-md-6 col-sm-12 col-lg-6'>
      <div className="skills-image">
     <Lottie options={lottieOptions}/>
    </div>
      </div>
      <div className='col-md-6 col-sm-12 col-lg-6'>
      <div className="skills-content" data-aos="fade-left" id="skills">
      <h1 id="skills-head">What I Do</h1>
      <p id="skills-p">Experienced Front-End Developer, Freelancer, Full Stack Developer to be.</p>
      

        <div className="contain">

          <i className="fab fa-html5 fa-2x skills-icon"><p style={style}>Html5</p></i>
          <i className="fab fa-css3-alt fa-2x skills-icon"><p style={style}>Css3</p></i>
          <i className="fab fa-sass fa-2x skills-icon"><p style={style}>Sass</p></i>
          <i className="fab fa-js fa-2x skills-icon"><p style={style}>Javascript</p></i>
          <i className="fab fa-angular fa-2x skills-icon"><p style={style}>Angular</p></i>
          <i className="fab fa-react fa-2x skills-icon"><p style={style}>React js</p></i>
          <i className="fab fa-node fa-2x skills-icon"><p style={style}>Node js</p></i>
          <i className="fab fa-bootstrap fa-2x skills-icon"><p style={style}>Bootstrap</p></i>
          <i className="fas fa-database fa-2x skills-icon"><p style={style}>sql-database</p></i>
          <i className="fab fa-npm fa-2x skills-icon"><p style={style}>npm</p></i>
          <i className="fas fa-fire fa-2x skills-icon"><p style={style}>Firebase</p></i>
          <i className="fab fa-git-alt fa-2x skills-icon"><p style={style}>Git</p></i>
        </div>
     
        
      <p className="skills-content1">
      <span style={style1}>⚡</span>Develop highly interactive Front end/User Interfaces for your web apps and mobile-applications</p>
      <p className="skills-content1"><span style={style1}>⚡</span>Converting UI designs perfectly into code</p>
      <p className="skills-content1"><span style={style1}>⚡</span>Integration of third party services such as firebase. stripe, razorpay etc</p>
    </div>
      </div>
    </div>
    
    
  </div>
        </>
    )
}
