import './App.css';
import BlurOverlay from './components/blurOverlay/BlurOverlay';
import LandingTitle from './components/landingTitle/LandingTitle';

import Scene from './components/scene/Scene';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="main">
        <LandingTitle />
        <Scene />
        <BlurOverlay />
      </section>
    </div>
  );
}

export default App;
