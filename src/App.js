import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import LandingTitle from './components/LandingTitle/LandingTitle';
import MiddleInformation from './components/MiddleInformation/MiddleInformation';

import Scene from './components/scene/Scene';

function App() {
  const [hoveredItem, setHoveredItem] = useState(false);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Scene />
      <BlurOverlay />
      <section className={styles.main}>
        <LandingTitle />
        <MiddleInformation hoveredItem setHoveredItem />
      </section>
    </div>
  );
}

export default App;
