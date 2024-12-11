import React from "react";
import './intro.css';

import bg from '../../../assets/Mypic-removebg.png';
// import { Button } from "bootstrap";
const Intro=()=>{
    return(
        <section id="intro">
            <div className="introContent">
               <span className="hello">Hello,</span>  
               <span className="introText">I'm<span className="introName"> Sailendra</span> <br/>Full-Stack Java Developer</span>
                <p className="intropara">I am a full-stack Java developer skilled in creating RESTful API's and attractive web pages</p>
                
                </div>
                <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro