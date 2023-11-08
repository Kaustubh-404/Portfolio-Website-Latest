import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from 'react'
import React1 from "../Assets/react1.jpg";
import React2 from "../Assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a React Front-End & Machine Learning Developer. My expertise lies in crafting responsive and secure websites for clients. Additionally, I'm a proficient AI/ML Developer, constantly enhancing my skills to push the boundaries of artificial intelligence.</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent