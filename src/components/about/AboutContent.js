import React from "react";
import "./AboutContent.scss";
import aboutPicture from "../../assets/TeyBlue-3.png"
import { RiMickeyFill } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi"
import Resume from "../Resume";

function AboutContent() {
  return (
    <div  className="aboutContent">
    {/* <Resume /> */}
    {/* <div className="aboutContent__resume">< a href = "https://docs.google.com/document/d/e/2PACX-1vTfIJ6wYZfBlTa4qz0y20zKXx0Hpma9aPw00OM7NWHBrWKdyBTXcbRZnwoQBe9iTX2_gEP2MuXzPnnH/pub"  target="_blank" rel="noreferrer"> View Resume <HiExternalLink /> </a></div> */}
    <img src={aboutPicture} alt="teyanna" className="aboutContent__pic"/>
      <ul>
        <li className="aboutContent__question">Where am I from ?</li>
        <p className="aboutContent__answer">
          A Queens, NY native with a Carribean background.
        </p>

        <li className="aboutContent__question">Where did I study ?</li>
        <p className="aboutContent__answer">
          <a href="https://www.pursuit.org/" target="_blank" rel="noreferrer">Pursuit</a> : An intensive 12-month, Google funded,
          software engineering fellowship with a 9% acceptance rate.
        </p>

        <li className="aboutContent__question">What is my mission ?</li>
        <p className="aboutContent__answer">
          Combining my interests in tech and wellness, I strive to contribute
          useful applications to the public. I believe that balance is the key
          to a healthier, more fulfilled life for all individuals. And if we can
          learn these things as early as possible, I'm confident that the future
          of later generations will be brighter. Therefore, my mission is to
          create tools that will assist in integrating wellness education into
          the lives of young minds in a fun and exciting way, through tech.
        </p>

        <li className="aboutContent__question">What are my hobbies ?</li>
        <p className="aboutContent__answer">
          In my free time, I love watching all genres of movies and shows ( with
          an affinity to anything Disney <RiMickeyFill /> ), meditating,
          traveling, listening and dancing to music, and experimenting with new
          ways to care for and style my natural curls !
        </p>
      </ul>
    </div>
  );
}

export default AboutContent;
