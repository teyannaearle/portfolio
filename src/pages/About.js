import React from 'react'
import AboutContent from '../components/about/AboutContent'
import AboutPicture from '../components/about/AboutPicture'
import "./About.scss"


function About() {
    return (
        <div className='aboutPage'>
            <AboutPicture />
            <AboutContent />
        </div>
    )
}

export default About
