import React from 'react';
import Navbar from "./Component/navbar/navbar"; 
import Intro from './Component/intro/intro';
import Skills from './Component/skills/skills';
import Contact from './Component/contact/contact';
import LatestProject from './Component/LatestProject/LatestProject';

function App() {
  return (
    <div className='App'>
      <Navbar /> 
      <Intro /> 
      <Skills />
      <LatestProject /> 
      <Contact />
    </div>
  );
}

export default App;
