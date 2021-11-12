import React from 'react'
import './style.css'
import downloaded from './images/download (1).png'
import notes from './images/25-255518_notes-icon-notes-app-icon-png-transparent-png-removebg-preview.png'
import textUtils from './images/2ce9d0f65984573db389e4f6c85dd8a5-removebg-preview.png'

export default function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="project-head">Personal Projects</h1>
        <p className="project-p">Some of my own Projects</p>

        <div className="cards">


          <div className="card text-center" >
            <img src={downloaded} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">BMI Calculator</h5>
              <p className="card-text">BMI calculator helps the user to calculate their BMI index.BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. </p>
              <a href="https://sumit-geek-del.github.io/bmi-calculator/" target="_blank" rel="noreferrer" className="btn btn-outline-dark projects-btn">Visit Website</a>
              <a href="https://github.com/sumit-geek-del/bmi-calculator" target="_blank" rel="noreferrer" className="btn btn-outline-dark projects-btn">Source Code</a>
            </div>
          </div>
          <div className="card text-center" >
            <img src={notes} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MyNotes</h5>
              <p className="card-text">MyNotes is a simple web application that allows user to take notes while working. It is very much easy to use and store all the data in the local storage.</p>
              <a href="https://sumit-geek-del.github.io/notes.github.io/" target="_blank" rel="noreferrer" className="btn btn-outline-dark projects-btn">Visit Website</a>
              <a href="https://github.com/sumit-geek-del/notes.github.io" target="_blank" rel="noreferrer" className="btn btn-outline-dark projects-btn">Source Code</a>
            </div>
          </div>
          <div className="card text-center">
            <img src={textUtils} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">TextUtils</h5>
              <p className="card-text">TextUtils is a user-friendly website which help users to easily gets insights about thier text. Users can easily transform their text using this web application.</p>

              <a href="https://github.com/sumit-geek-del/TextUtils-React" target="_blank" rel="noreferrer" className="btn btn-outline-dark projects-btn">Source Code</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
