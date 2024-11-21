import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import UpperContainer from './components/UpperContainer/UpperContainer';

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
        <UpperContainer />
        <MiddleInformation hoveredItem setHoveredItem />
      </section>
    </div>
  );
}

export default App;
