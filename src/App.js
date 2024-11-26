// App.jsx
import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import UpperContainer from './components/UpperContainer/UpperContainer';
import MiddleInformation from './components/MiddleInformation/MiddleInformation';
import Scene from './components/scene/Scene';
import HoverText from './components/HoverText/HoverText';
import BrandMarquee from './components/BrandMarquee/BrandMarquee';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSplashscreen, setIsSplashscreen] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    !isSplashscreen && setShowMain(true);
  }, [isSplashscreen]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <Scene />
      <BlurOverlay hoveredItem />

      {isSplashscreen ? (
        <SplashScreen
          isSplashscreen={isSplashscreen}
          setIsSplashscreen={setIsSplashscreen}
        />
      ) : (
        <section
          className={`${styles.main} ${showMain && styles.sectionVisible}`}
        >
          <UpperContainer />
          <MiddleInformation
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
          <HoverText hoveredItem={hoveredItem} />
          <BrandMarquee />
          <Footer />
        </section>
      )}
    </div>
  );
}

export default App;
