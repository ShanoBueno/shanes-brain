import React from 'react';
import About from './components/About'
import './App.css';
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
