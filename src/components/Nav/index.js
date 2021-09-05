import React from 'react';

function Nav(){
  return(

<header>
  <h2>
    <a href="/">
      Shane's Brain
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About Me
        </a>
      </li>
      <li className="mx-1">
            <a href="#projects">
              Projects
            </a>
      </li>
      <li className = "mx-1">
            <a href="#contact">
              Contact
            </a>
      </li>
      <li className = "mx-1">
            <a href="#Resume">
              Resume
            </a>
      </li>
    </ul>
  </nav>
</header>
  )
}

export default Nav