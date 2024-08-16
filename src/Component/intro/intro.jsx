import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <br/>
        <span className="introtext">I'm <span className="introname">Harsh</span></span>
        <br/>
        <span>Web Developer</span>
        <p className="intropara">
          I am a web developer with experience in creating <br />visually appealing and user-friendly websites.
        </p>

        <div className='CV'>
          <Link to="sectionToScrollTo" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} smooth={true} duration={500}>
            <button className="btn">Hire me</button>
          </Link>

          <a href="/path-to-your-cv/Harsh_CV.pdf" download className="btn">
            Download CV
          </a>

        </div>
      </div>
      <img src='./assets/bgimage.png' alt="Background" className="bgimg" />
    </section>
  );
};

export default Intro;
