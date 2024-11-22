import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import UpperContainer from './components/UpperContainer/UpperContainer';

import MiddleInformation from './components/MiddleInformation/MiddleInformation';

import Scene from './components/scene/Scene';
import HoverText from './components/HoverText/HoverText';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Scene />
      <BlurOverlay hoveredItem />
      <section className={styles.main}>
        <UpperContainer />
        <MiddleInformation
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        />
        <HoverText hoveredItem={hoveredItem} />
      </section>
    </div>
  );
}

export default App;
