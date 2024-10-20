import React from "react";
import "./AboutContent.scss";
import aboutPicture from "../../assets/TeyBlue-3.png";
import { RiMickeyFill } from "react-icons/ri";

function AboutContent() {
  return (
    <div className="aboutContent">
      <img src={aboutPicture} alt="teyanna" className="aboutContent__pic" />
      <ul>
        <li className="aboutContent__question">Where am I from ?</li>
        <p className="aboutContent__answer">
          &emsp; A Queens, NY native with a Carribean background.
        </p>

        <li className="aboutContent__question">Where did I study ?</li>
        <p className="aboutContent__answer">
          &emsp;
          <a href="https://www.pursuit.org/" target="_blank" rel="noreferrer">
            Pursuit
          </a>{" "}
          : An intensive 12-month, Google funded, software engineering
          fellowship with a 9% acceptance rate.
        </p>

        <li className="aboutContent__question">What is my mission ?</li>
        <p className="aboutContent__answer">
          &emsp; Bridging the gap between my interests in tech and personal
          development, I’m passionate about creating solutions that inspire
          growth and wellness for individuals of all ages. My journey in web
          development is driven by my desire to empower others through
          innovative digital tools. I believe in the power of technology to
          transform lives, and I’m eager to contribute my skills to projects
          that make the world a healthier, more connected place.
        </p>

        <li className="aboutContent__question">What are my hobbies ?</li>
        <p className="aboutContent__answer">
          <span>
            <img
              src="https://media.giphy.com/media/12sc1PggM7s9q0/giphy.gif"
              alt="gif"
            />
            <img
              src="https://media.giphy.com/media/wVW2wqlhDMuOWUEskW/giphy.gif"
              alt="gif"
            />
            <img
              src="https://media.giphy.com/media/8mBRrPdsiPlIlRr7Bk/giphy.gif"
              alt="gif"
            />
            <img
              src="https://media.giphy.com/media/WOZ1h2GTBXOe4nDGPz/giphy.gif"
              alt="gif"
            />
            <img
              src="https://media.giphy.com/media/gr3vDcFs1t1QJNtbW5/giphy.gif"
              alt="gif"
            />
          </span>
          &emsp; When I’m not coding, you can find me immersing myself in a
          variety of wellness-focused hobbies. Meditation, fitness, and dance
          keep me grounded and energized, while my love for travel inspires
          creativity and a broader perspective. I’m also deeply invested in
          natural hair and skincare, exploring holistic health practices that
          align with my passion for well-being. Whether I’m learning new skills,
          nurturing my creativity, or seeking balance through healthy habits,
          I’m always focused on personal development—mind, body, and spirit.
        </p>
      </ul>
    </div>
  );
}

export default AboutContent;
