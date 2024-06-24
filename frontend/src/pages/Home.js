// src/pages/Home.js
// Home component: Displays the main landing page content

import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Welcome to Tim's Lawn Care Service</h2>
      <p className={styles.description}>We provide top-quality lawn care services for your home or business.</p>
    </div>
  );
};

export default Home;