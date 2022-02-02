import React from "react";
import "./style.css";
import corona from './images/og-corona-removebg-preview.png'
import movie from './images/5fdfa98001a201aed81d5119d0456915-removebg-preview.png'
import quotes from './images/id.jl.android.quoteseverything-removebg-preview (1).png'

export default function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="project-head">Personal Projects</h1>
        <p className="project-p">Some of my own Projects</p>

        <div className="cards">
          <div className="card text-center">
            <img src={corona} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CoronaTracker</h5>
              <p className="card-text">
                CoronaTracker allows users to access real-time information about
                corona cases all over the world. It's really easy to use and has
                a straightforward design. It's created with Angular CLI and
                pulls data from the disease.sh API. We used charts to keep
                things simple for the users. {" "}
              </p>
              <a
                href="https://sumit-geek-del.github.io/coronaTracker/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark projects-btn"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/sumit-geek-del/coronaTracker"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark projects-btn"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="card text-center">
            <img src={movie} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MovieLove</h5>
              <p className="card-text">
              We designed a web app for movie and series fans that allows them to simply search for their favourite films and read user reviews to assist them pick what to watch and what not to watch. It's made with Reactjs, OMDB API, and Styled Components.
              </p>
              <a
                href="https://github.com/sumit-geek-del/ReactMovieApp"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark projects-btn"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="card text-center">
            <img src={quotes} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">QuotesGenerator</h5>
              <p className="card-text">
              A simple web tool to keep you inspired throughout the day. Allow you to generate quotes and then tweet them to Twitter.
              </p>
              <a
                href="https://sumit-geek-del.github.io/QuotesGenerator/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark projects-btn"
              >
                Visit Webiste
              </a>

              <a
                href="https://github.com/sumit-geek-del/QuotesGenerator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark projects-btn"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
