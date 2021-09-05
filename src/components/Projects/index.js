import React from 'react';

function Projects() {
  return (
    <section className="page-section" id="work">
      <h2 id='projects'>Featured</h2>
      
<div className="flex-container">
        <a href="https://shanobueno.github.io/newsies/" className="flex-item NYTimes">
          <div>
            <h3>NYTimes Archive</h3>
            <span>NYTimes Archive API/JS/CSS</span>
          </div>
        </a>
        </div>
        <h2> More Projects</h2>
      <div className="flex-container">
        <a href="https://github.com/ShanoBueno/Read.you" className="flex-item Readyou">
          <div>
            <h3>Read.You</h3>
            <span>Node/Inquirer</span>
          </div>
        </a>
        <a href="https://shanobueno.github.io/password-parrot/" className="flex-item react-calc">
          <div>
            <h3>Password Parrot</h3>
            <span>JS/CSS</span>
          </div>
        </a>

        <a href=" https://intense-cove-60718.herokuapp.com/" className="flex-item pastel-puzzles">
          <div>
            <h3>Blogger</h3>
            <span>Node/Express/JS/CSS</span>
          </div>
        </a>

      </div>
    </section>
  );
}
export default Projects;