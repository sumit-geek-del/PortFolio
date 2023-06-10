import React,{useState,useEffect} from 'react';
import waving_hand from './images/waving-hi.gif';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGComponent from './SvgComponent';
import '../styles/container.css';
import animationData from '../animations/141279-codingwithcoffile.json';
import Lottie from 'react-lottie';

export default function Container() {

    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   
    const [ScrollTop, setScrollTop] = useState(0);
    const onScroll = ()=>{
        const winscroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const scrolled = (winscroll/height) * 100;

        setScrollTop(scrolled);
    }
    useEffect(() => {
        AOS.init({
        delay: 2,
        duration: 1000
    });
        window.addEventListener("scroll",onScroll)
        return ()=>{
            window.removeEventListener("scroll",onScroll);
        }
    }, [])

    const click = () =>{
        window.location.href = " https://drive.google.com/file/d/1voJiJDLhBrrqzr-HlXhP92iq8Dbz7ERN/view?usp=sharing"
    }
    const contact = () =>{
        window.location.href = "#contact-us"
    }
    return (
        <>
        <div className="progressMainWrapper">
        <div className="progressMainStyle" style ={{width:`${ScrollTop}%` }}>            
        </div>
        </div>
            <div className="container" data-aos="fade-left" id="greeting">
            <div className='row'>
                <div className='col-md-6 col-sm-12 col-lg-6' style={{margin:'3em auto'}}>
                <h1 id="greeting-text">Hey, I'm Sumit Kumar<span ><img src={waving_hand} draggable="false" id="wave-emoji" alt="waving hand" /></span></h1>
                
                <p id="greeting-subtitle">
                    A passionate Full Stack Software Developer<span>🚀</span> having over 1 year of experience in building web (Desktop-PWA) and Mobile applications with Javascript/Typescript/Angular/NodeJs/Flutter

                </p> 
                <div className='social-media-div'>
                <a href="https://github.com/sumit-geek-del" className="icon-button github" target="_blank" rel="noreferrer"><i className="fab fa-github" id="github"></i></a>
                    <a href="https://www.linkedin.com/in/sumitkumar9070/" className="icon-button github" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in" id="linkedin"></i></a>
                    <a href="mailto:sumitrajraj508@gmail.com" className="icon-button github" target="_blank" rel="noreferrer" ><i className="fab fa-google" id="gmail"></i></a>
                    <a href="https://www.instagram.com/sumit.4945/" className="icon-button github" target="_blank" rel="noreferrer"  ><i className="fab fa-instagram " id="instagram"></i></a>

                </div>  

                <div className="resume">

                        <button type="button" className="resume-btn" onClick = {contact} id="contact">CONTACT ME</button>
                        <button type="button" className=" resume-btn" onClick={click} id='resume-new'>SEE MY RESUME</button>
                </div>
                </div>
                <div className='col-md-6 col-sm-12 col-lg-6'>
                <Lottie
                options={lottieOptions}  
                />
                </div>
            </div>

             
            </div>
        </>
    )
}
