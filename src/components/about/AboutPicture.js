import React from 'react'
import aboutPic from "../../assets/TeyBlue-3.png"
import "./AboutPicture.scss"

function AboutPicture() {
    return (
        <div className="aboutPicWrapper">
            <img src={aboutPic} alt="teyanna" />
        </div>
    )
}

export default AboutPicture
