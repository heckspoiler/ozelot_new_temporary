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
      <p>
        {textElement !== null
          ? information[textElement]?.description
          : `Ozelot Studio is a mixed media studio with a mission to create future ideas and immersive and brand experiences. We are constantly looking for creative processes that elevates a brand’s identity in the digital and physical realm.`}
      </p>
    </div>
  );
}
