import React, { useEffect } from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  

  return (
    <>
      <section id="skills">
        <div className="heading-wrapper">
          <h1 className="heading-tittle">My <span>Skill</span></h1>
          <div className="container-content">
        <div className="container1">
          <h1 className="heading1">Technical Skills</h1>
          <div className="technical-bars">
            <div className="bar">
              <FontAwesomeIcon icon={faHtml5} className="icon-html" />
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line" data-percentage="95">
                <span className="progress-line-html"></span>
              </div>
            </div>

            <div className="bar">
              <FontAwesomeIcon icon={faCss3Alt} className="icon-css" />
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line" data-percentage="90">
                <span className="progress-line-css"></span>
              </div>
            </div>
            <div className="bar">
              <FontAwesomeIcon icon={faJs} className="icon-js" />
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="progress-line" data-percentage="85">
                <span className="progress-line-js"></span>
              </div>
            </div>
            <div className="bar">
            <FontAwesomeIcon icon={faReact} className="icon-react" />
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line" data-percentage="95">
                <span className="progress-line-react"></span>
              </div>
            </div>
          </div>
        </div>



        <div className="container2">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage" data-target="90">60%</div>
              <div className="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage" data-target="80">80%</div>
              <div className="text">Communication</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage" data-target="75">60%</div>
              <div className="text">Problem Solving</div>
            </div>
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage" data-target="99">90%</div>
              <div className="text">Team Work</div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
