import React, { useState, useEffect } from 'react';

import { information } from '../MiddleInformation/info';

import styles from './HoverText.module.css';

export default function HoverText({ hoveredItem }) {
  const [textElement, setTextElement] = useState(null);

  useEffect(() => {
    setTextElement(hoveredItem);
  }, [hoveredItem]);

  return (
    <div className={styles.textContainer}>
      <p>{textElement !== null ? information[textElement]?.description : ''}</p>
    </div>
  );
}
