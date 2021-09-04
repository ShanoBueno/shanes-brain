import React from 'react';

function Nav(){
  return(

<header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className="mx-1">
        <span>Porfolio</span>
      </li>
      <li className = "mx-1">
        <span>Contact</span>
      </li>
      <li className = "mx-1">
        <span>Resume</span>
      </li>
    </ul>
  </nav>
</header>
  )
}

export default Nav