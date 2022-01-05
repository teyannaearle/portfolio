import React from 'react'
import HomeContent from '../components/home/HomeContent'
import HomePicture from "../components/home/HomePicture"
import "./Home.scss"

function Home() {
    return (
        <div className="homePage">
            <HomePicture />
            <HomeContent />
        </div>
    )
}

export default Home
