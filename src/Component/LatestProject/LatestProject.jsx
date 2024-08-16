import React from 'react';
import './LatestProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'; 

const LatestProject = () => {
  return (
    <>
      <section>
        <div className='portfolio' id='latestproject'> 
          <div className="main-text">
            <h2>Latest <span>Project</span></h2>
            <div className='portfolio-content'>
              <div className='row'>
                <img src='./assets/todo.png' alt='Todo App'/>
                <div className='layer'>
                  <h5>Todo app</h5>
                  <a href='#'>
                    <FontAwesomeIcon icon={faUpload} />
                  </a>
                </div>
              </div>
              <div className='row'>
                <img src='./assets/weatherapp.jpg' alt='Weather App'/>
                <div className='layer'>
                  <h5>Weather app</h5>
                  <a href='#'>
                    <FontAwesomeIcon icon={faUpload} />
                  </a>
                </div>
              </div>
              <div className='row'>
                <img src='./assets/salon.png' alt='salon site'/>
                <div className='layer'>
                  <h5>salon-site</h5>
                  <a href='#'>
                    <FontAwesomeIcon icon={faUpload} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestProject;
