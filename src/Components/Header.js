import React from 'react'
import main_img from './images/sumit kumar.jpg';
import './style.css'
import {Link} from "react-router-dom"

export default function Header() {
    const style = {
        backgroundColor: "#fff"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={style}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="header"> <img src={main_img} alt="" id="header-image"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end" id="header-list">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#projects">Projects</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" href="#contact-us">Contact Us</a>
              </li>
            </ul>
            
          </div>
        </div>
    </nav>

    )
}
