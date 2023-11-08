import "./Heroimg.css";
import IntroImg from "../Assets/1.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg" /> 
        </div>

        <div className="content">
            <p>HI, I'M A KAUSTUBH</p>
            <h1>React Developer </h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn-light">Contact</Link>
            </div>

        </div>

    </div>
  )
}

export default Heroimg