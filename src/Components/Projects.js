import React from "react";
// import "./style.css";
import '../styles/projects.css';
import sinosefImage from './images/photo-1535732759880-bbd5c7265e3f.avif';
import coronaImage from './images/og-corona-removebg-preview.png'

export default function Projects() {

  const goToSinosefPage = ()=>{
    window.location.href = 'http://sinosef.com/';
  }

  const goToCoronaPage = ()=>{
    window.location.href = 'https://sumit-geek-del.github.io/coronaTracker/';
  }

  return (
    <>
      <div className="projects" id="projects">
        <h1 className="project-head">Personal Projects</h1>
        <p className="project-p">Some of my own Projects</p>

       <div className="projects-container">
        <div className="project-card project-card-light">
            <div className="project-image">
                <img src={sinosefImage} alt="sinosef"/>
            </div>
            <div className="project-detail">
              <h5 className="card-title">Sinosef Enterprises Limited</h5>
              <p className="card-subtitle">We made a webiste to showcase their work for this construction company and CMS platform to manage the content on their main website</p>
              <div className="project-card-footer">
                <span className="project-tag" onClick={goToSinosefPage}>Visit Website</span>
              </div>
            </div>
        </div>
        <div className="project-card project-card-light">
            <div className="project-image">
                <img src={coronaImage} alt="sinosef"/>
            </div>
            <div className="project-detail">
              <h5 className="card-title">Corona Tracker</h5>
              <p className="card-subtitle">Web Application that helps users all around the globe to keep track of the corona cases around them.</p>
              <div className="project-card-footer">
                <span className="project-tag" onClick={goToCoronaPage}>Visit Website</span>
              </div>
            </div>
        </div>
        <div className="project-card project-card-light">
            <div className="project-image">
                <img src={sinosefImage} alt="sinosef"/>
            </div>
            <div className="project-detail">
              <h5 className="card-title">Sinosef Enterprises Limited</h5>
              <p className="card-subtitle">We made a webiste to showcase their work for this construction company and CMS platform to manage the content on their main website</p>
              <div className="project-card-footer">
                <span className="project-tag" >Visit Website</span>
              </div>
            </div>
        </div>
       </div>
      </div>
    </>
  );
}
