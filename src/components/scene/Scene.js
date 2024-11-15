import React from 'react';

import styles from './Scene.module.css';
import ThreeCanvas from './ThreeCanvas/ThreeCanvas';

export default function Scene() {
  return (
    <div className={styles.main}>
      <ThreeCanvas />
    </div>
  );
}
