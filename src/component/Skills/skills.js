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
  const skillsData = [
    { img: Java, alt: "Java", name: "Java" },
    { img: Python, alt: "Python", name: "Python" },
    { img: Database, alt: "Database", name: "Oracle" },
    { img: Springboot, alt: "Springboot", name: "SpringBoot" },
    { img: Html, alt: "HTML", name: "HTML" },
    { img: Css, alt: "CSS", name: "CSS" },
    { img: Bootstrap, alt: "Bootstrap", name: "Bootstrap" },
    { img: Javascript, alt: "JavaScript", name: "JavaScript" },
    { img: Reactjs, alt: "ReactJS", name: "ReactJs" },
    { img: Photo, alt: "Editing", name: "Photo/Video Editing" }
  ];

  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <div className="skillBars">
        {skillsData.map((skill, index) => (
          <div className="skillBar" key={index}>
            <img src={skill.img} alt={skill.alt} className="skillBarImg" />
            <div className="skillBarText">
              <h2>{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
