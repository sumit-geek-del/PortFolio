import React from 'react'
import './style.css'
import college from './images/mdu.jpg'
import mobile from './images/education-mobile.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import educationImage from './images/education-image.svg';


export default function Education() {
    const style = {
        fontSize: "28px",
        fontWeight: "700",
        fontFamily: `'Montserrat', sans-serif`,
        textTransform: "uppercase",
        marginTop: "2rem"
    }
    AOS.init({

      duration:1000,
      delay:2
    })
    return (
        <>
            <div className="education" id="education" data-aos="fade-right">
    <div id="education-inf">
      <h5 className="education-head">EDUCATION</h5>
     

      <img src={college} alt="" id="edu-img"/>

      <h3 style={style}>Maharshi dayanand university</h3>
      <h6 style={{fontSize: "19px", fontFamily: `'Montserrat', sans-serif`, marginTop: "2rem"}}>Bachelor of technology</h6>
      
      <p style={{fontFamily: `'Montserrat', sans-serif`, color: "#868e96", margin: "0 0 0 0rem"}}>Aug-2018 - Mar-2023</p>
      <p style={{fontFamily: `'Montserrat', sans-serif`, color: "#868e96", margin: "0 0 0 0rem"}}>Current GPA-8/10</p>
      


    </div>
    <div className="edu-img" data-aos="fade-left">
      <img src={educationImage} alt="" id="edu-gif"/>
     

    </div>
  </div>
        </>
    )
}
