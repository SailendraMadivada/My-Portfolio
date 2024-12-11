import React from "react";
import './skills.css';
import Java from '../../assets/javalogo.png';
import Database from '../../assets/databaselogo.png';
import Springboot from '../../assets/springbootlogo.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Javascript from '../../assets/javascript.png';
import Reactjs from '../../assets/reactjs.png';
import Bootstrap from "../../assets/bootstrap.png";
import Python from "../../assets/python.png";
import Photo from "../../assets/photo.png";


const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">My Skills</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Java} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Python} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Database} alt="Database" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Oracle</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Springboot} alt="Springboot" className="skillBarImg" />
          <div className="skillBarText">
            <h2>SpringBoot</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Html} alt="Html" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Css} alt="Css" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Bootstrap} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Javascript} alt="Javascript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Reactjs} alt="Reactjs" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ReactJs</h2> 
          </div>
        </div>
        <div className="skillBar">
          <img src={Photo} alt="Java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Photo/Video Editing</h2> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;