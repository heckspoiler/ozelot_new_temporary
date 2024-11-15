import styles from './App.module.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import LandingTitle from './components/LandingTitle/LandingTitle';

import Scene from './components/scene/Scene';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Scene />
      <BlurOverlay />
      <section className={styles.main}>
        <LandingTitle />
      </section>
    </div>
  );
}

export default App;
