// src/App.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from './images/logo.png';
import './App.css';

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const adjustLogoPosition = (marginRight, marginTop) => {
    document.documentElement.style.setProperty('--logo-margin-right', `${marginRight}px`);
    document.documentElement.style.setProperty('--logo-margin-top', `${marginTop}px`);
  };

  const adjustButtonsPosition = (marginRight, marginTop) => {
    document.documentElement.style.setProperty('--buttons-margin-right', `${marginRight}px`);
    document.documentElement.style.setProperty('--buttons-margin-top', `${marginTop}px`);
  };

  // Example adjustments
  useEffect(() => {
    adjustLogoPosition(20, 0); // Adjust the logo's right padding
    adjustButtonsPosition(20, 0); // Adjust the buttons' right padding
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <Link className="App-link" to="home" smooth={true} duration={500}>Home</Link>
          <Link className="App-link" to="about" smooth={true} duration={500}>About Us</Link>
          <Link className="App-link" to="services" smooth={true} duration={500}>Services</Link>
          <Link className="App-link" to="blog" smooth={true} duration={500}>Blog</Link>
          <Link className="App-link" to="contact" smooth={true} duration={500}>Contact Us</Link>
        </nav>
        <div className="App-buttons">
          <button className="App-button">Login</button>
          <button className="App-button">Sign Up</button>
        </div>
      </header>
      <main>
        <h1>Welcome to Tim's Lawn Care</h1>
        <h3>Your one-stop solution for lawn care services</h3>
      </main>
    </div>
  );
}

export default App;
