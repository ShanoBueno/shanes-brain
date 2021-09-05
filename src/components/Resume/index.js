import React from 'react';
import ResumePic from '../../assets/img/resume.png';

function Resume() {
  return (
    <div>
    <h2>Resume</h2>
    <section className = "flex-container">
        <a href="https://docs.google.com/document/d/1jC-B4i9X7U9xbraoieQ988BFtunytmf4oyoVFmlhZGE/edit?usp=sharing"><img src={ResumePic} alt="resume" /></a>
      </section>
    </div>


  )
}

export default Resume; 