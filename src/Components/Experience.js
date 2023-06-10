
import React from 'react';
import '../styles/experience.css'
import companyLogo from './images/company-logo-1.svg'
const Experience = () => {
  return (
    <>
        <div id='experience'>
            <div className='experience-container'>
                <div>
                    <h1 className='experience-heading'>Experiences</h1>
                </div>
                <div className='experience-cards-div'>
                    <div className='experience-card'>
                        <div className='experience-banner'>
                            <div className='experience-blurred_div'></div>
                            <div className='experience-div-company'>
                                <h5 className='experience-text-company'>OneTick Technologies</h5>

                            </div>

                            <img src={companyLogo} alt="" className='experience-rounded-img'/>
                        </div>
                        <div className='experience-text-details'>
                            <h5 className='experience-text-role'>Software Engineer</h5>
                            <h5 className='experience-text-date'>Jul 2022-Present</h5>
                            <h5 className='subTitle experience-text-desc'>FullStack Dev in Companies Team</h5>
                           <ul>
                            <li className='subTitle'>Created Chat App for users to chat seamlessely in realtime using socket-io</li>
                            <li className='subTitle'>Worked on Ecommerce Project to search products with filter and pagination</li>
                            <li className='subTitle'>Fixed bugs and implements new CR's in RMS project</li>
                           </ul>

                        </div>
                    </div>  

                    <div className='experience-card'>
                        <div className='experience-banner'>
                            <div className='experience-blurred_div'></div>
                            <div className='experience-div-company'>
                                <h5 className='experience-text-company'>OneTick Technologies</h5>

                            </div>

                            <img src={companyLogo} alt="" className='experience-rounded-img'/>
                        </div>
                        <div className='experience-text-details'>
                            <h5 className='experience-text-role'>Technology Intern</h5>
                            <h5 className='experience-text-date'>Feb 2022-Present</h5>
                            <h5 className='subTitle experience-text-desc'>FrontEnd Dev intern in Companies Team</h5>
                           <ul>
                            <li className='subTitle'>Worked on converting angular app to PWA</li>
                            <li className='subTitle'>Fixing small bugs in RMS app</li>
                           </ul>

                        </div>
                    </div>  
                </div>
            </div>  
        </div>  
    </>
  )
}

export default Experience