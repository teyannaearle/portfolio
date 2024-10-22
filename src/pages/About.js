import React from 'react'
import AboutContent from '../components/about/AboutContent'
import AboutPicture from '../components/about/AboutPicture'
import LinksSectionAbout from '../components/navs/topNav/LinksSectionAbout'
import "./About.scss"


function About() {
    return (
        <div className='aboutPage'>
            <LinksSectionAbout />
            <span className='aboutPage__container' > 
            <AboutPicture />
            <AboutContent />
            </span>
        </div>
    )
}

export default About
