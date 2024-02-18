import React from 'react'
import './style.css'
import contact from './images/1611743694772.jpg'
import 'aos/dist/aos.css';

export default function Contact() {

  return (
    <>
      <div class="contact" id="contact-us">

        <div class="contact-details">
          <h1 id="contact-header">Reach Out to me</h1>
          <p id="contact-p">Have anything interested in mind? Want an experienced Front-End Developer by your side? Want to discuss a project or just want to say hi? My Inbox is open for all.</p>
          <h2 id="contact-h2">FrontEnd Developer | Angular | NextJs | NodeJs | ExpressJs | MongoDB</h2>
          <h5 id="contatc-prof">Open for Oppurtunities: Yes</h5>
          <div class="socialMedia">


            <a href="https://github.com/sumit-geek-del" class="icon-button github" target="_blank" rel="noreferrer" ><i class="fab fa-github-square " id="github"></i></a>
            <a href="https://www.linkedin.com/in/sumitkumar9070/" class="icon-button github" target="_blank" rel="noreferrer" ><i class="fab fa-linkedin " id="linkedin"></i></a>
            <a href="mailto:sumitrajraj508@gmail.com" class="icon-button github" target="_blank" rel="noreferrer" ><i class="fab fa-google-plus " id="gmail"></i></a>
            <a href="https://www.instagram.com/sumit.4945/" class="icon-button github" target="_blank" rel="noreferrer" ><i class="fab fa-instagram " id="instagram"></i></a>

          </div>


        </div>
        <div class="contact-image" data-aos="fade-left">
          <img src={contact} alt="" id="contact-image" />


        </div>
      </div>
    </>
  )
}
