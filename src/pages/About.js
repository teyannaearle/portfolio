import React from 'react'
import AboutContent from '../components/about/AboutContent'
import AboutPicture from '../components/about/AboutPicture'
import Resume from '../components/Resume'
import "./About.scss"


function About() {
    return (
        <div className='aboutPage'>
            <Resume />
            <span className='aboutPage__container' > 
            <AboutPicture />
            <AboutContent />
            </span>
        </div>
    )
}

export default About
