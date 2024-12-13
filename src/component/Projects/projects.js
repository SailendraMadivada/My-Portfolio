import React from "react";
import './projects.css'; 
import Employee from '../../assets/employee.jpg';
import Weather from '../../assets/weather1.webp';
import Calculator from '../../assets/calculator1.jpg'

const Projects = () => {
  return (
    <section id="projects">  
      <h2 className="worksTitle">Projects</h2>
      <div className="worksImgs">
        {/* Employee Management */}
        <div className="projectContainer">
          <a className="anc" href="https://github.com/SailendraMadivada/Employee-Management-System" target="_blank" rel="noopener noreferrer">
            <img src={Employee} alt="Employee Management Project" className="worksImg" />
          </a>
          <p className="projectName">Employee Management</p>
        </div>
        {/* Weather App */}
        <div className="projectContainer">
        <a className="anc" href="https://github.com/SailendraMadivada/Weatherproject" target="_blank" rel="noopener noreferrer">
          <img src={Weather} alt="Weather App" className="worksImg"/>
          </a>
          <p className="projectName">Weather</p>
        </div>
        {/* Calculator App */}
        <div className="projectContainer">
        <a className="anc" href="https://github.com/SailendraMadivada/Calculator-app" target="_blank" rel="noopener noreferrer">
          <img src={Calculator} alt="Calculator App" className="worksImg"/>
          </a>
          <p className="projectName">Calculator</p>
        </div>
      </div>
      {/* <button className="workBtn">See More</button> */}
    </section>
  );
};

export default Projects;
