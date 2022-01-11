import React from 'react'
import "./HomeContent.scss"

function HomeContent() {
    return (
        <div className="homeContent">
            <p className="homeContent__name homeContent__slideIn-first">Té - yanna Earle </p>
            <p className="homeContent__pronounce homeContent__slideIn-first">( tay-ahh-nuh er-l )</p>
            <p className="homeContent__heading homeContent__slideIn-second">Full Stack Web Dev</p>
            <p className="homeContent__explanations homeContent__slideIn-second"> I make web applications, and have fun doing it. </p>
            <p className="homeContent__heading homeContent__slideIn-third">Wellness Fanatic</p>
            <p className="homeContent__explanations homeContent__slideIn-third"> Always working to better my life and the lives of those around me. </p>
        </div>
    )
}

export default HomeContent
