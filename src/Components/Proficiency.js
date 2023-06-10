import React from 'react';
import '../styles/proficiency.css';
const Proficiency = () => {
    const style={
        width:'90%'
    }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <h1 className='proficiency_head'>Proficieny</h1>
                <div className='skill'>
                    <p>User Interface</p>
                    <div className='meter'>
                        <span style={style}></span>
                    </div>
                </div>
                <div className='skill'>
                    <p>User Experience</p>
                    <div className='meter'>
                        <span style={{width:'85%'}}></span>
                    </div>
                </div>

                <div className='skill'>
                    <p>Programming</p>
                    <div className='meter'>
                        <span style={{width:'70%'}}></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Proficiency