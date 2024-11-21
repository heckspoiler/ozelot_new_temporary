import React from 'react';

import styles from './BlurOverlay.module.css';

export default function BlurOverlay({ hoveredItem }) {
  return (
    <div
      className={`${styles.main} ${hoveredItem ? styles.isHovered : null}`}
    ></div>
  );
}
