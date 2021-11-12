import React,{useState,useEffect} from 'react';
import waving_hand from './images/waving-hi.gif';
import programmer from './images/programmer.gif';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Container() {
   
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
                <h1 id="greeting-text">Hey I'm Sumit Kumar<span ><img src={waving_hand} draggable="false" id="wave-emoji" alt="waving hand" /></span></h1>

                <p id="greeting-subtitle">
                    A passionate Front End  Software Developer<span><img src="https://twemoji.maxcdn.com/2/72x72/1f680.png" alt="" id="greeting-p" /></span> having over 3 months of experience in building client side of web applications with javascript/React js/React Native. I am final year student pursuing Computer Engineering in CRSSIET, Jhajjar.

                </p>
                <div className="container" id="social-media">
                    <a href="https://github.com/sumit-geek-del" className="icon-button github" target="_blank" rel="noreferrer"><i className="fab fa-github-square " id="github"></i></a>
                    <a href="https://www.linkedin.com/in/sumitkumar9070/" className="icon-button github" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin " id="linkedin"></i></a>
                    <a href="mailto:sumitrajraj508@gmail.com" className="icon-button github" target="_blank" rel="noreferrer" ><i className="fab fa-google-plus " id="gmail"></i></a>
                    <a href="https://www.instagram.com/sumit.4945/" className="icon-button github" target="_blank" rel="noreferrer"  ><i className="fab fa-instagram " id="instagram"></i></a>
                    <div className="resume">

                        <button type="button" className="btn btn-outline-dark resume-btn" onClick = {contact} id="contact">CONTACT ME</button>
                        <button type="button" className="btn btn-outline-dark resume-btn" onClick={click} id='resume-new'>SEE MY RESUME</button>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-right" id="coding">
                <img src={programmer} alt="avatar" id="avatar" />
            </div>
        </>
    )
}
