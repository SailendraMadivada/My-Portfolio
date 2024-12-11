import React from "react";
import './projects.css'; // Make sure your CSS file path is correct
import Employee from '../../assets/Employee-Management.jpg'; // Ensure the image path is correct

const Projects = () => {
  return (
    <section id="projects">  
      <h2 className="worksTitle">Projects</h2>
      <div className="worksImgs">
        <a className="anc" href="https://github.com/SailendraMadivada/Employee-Management-System" target="_blank" rel="noopener noreferrer">
          <img src={Employee} alt="Employee Management Project" className="worksImg" />
        </a>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Projects;
