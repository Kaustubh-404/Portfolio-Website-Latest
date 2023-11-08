import "./Footer.css";

import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Gokulnagar, Pune 48</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        +91 7058400616
                    </h4>
                </div>

                <div className="mail">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        kaustubhp2003@gmail.com
                    </h4>
                </div>

            </div>

            <div className="right">
            <h4>About Me</h4>
            <p>This is me Kaustubh Pardeshi. Frontend and ML Developer, I enjoy discussing new projects and design challenges.</p>
             
             <div className="social">
             <a href="https://www.instagram.com/kausstub/?igshid=MzMyNGUyNmU2YQ%3D%3D">
                <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

            <a href="https://twitter.com/FLACKK_?t=OdgN7_eUNPsWGpA620TIZQ&s=09">
                <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

            <a href="https://www.github.com/Kaustubh-404">
                <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

            <a href="https://www.linkedin.com">
                <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

             </div>
            </div>

        </div>
    </div>
  );
};

export default Footer