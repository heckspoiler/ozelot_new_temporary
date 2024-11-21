import React, { useEffect, useState, useRef } from 'react';
import styles from './MiddleInformation.module.css';
import { Player as Lottieplayer } from '@lottiefiles/react-lottie-player';
import { information } from './info';

export default function MiddleInformation({ hoveredItem, setHoveredItem }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const lottieRefs = useRef([]);

  useEffect(() => {
    lottieRefs.current = lottieRefs.current.slice(0, information.length);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null && lottieRefs.current[hoveredIndex]) {
      const ref = lottieRefs.current[hoveredIndex];
      ref.setPlayerDirection(1);
      ref.setPlayerSpeed(3);
      ref.play();
    }
  }, [hoveredIndex]);

  const handleMouseLeave = (index) => {
    const ref = lottieRefs.current[index];
    if (ref) {
      ref.setPlayerDirection(-1);
      ref.setPlayerSpeed(2);
      ref.play();
    }
    setHoveredIndex(null);
  };

  return (
    <div className={styles.informationContainer}>
      {information.map((info, i) => (
        <div
          key={info.index}
          className={styles.information}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <div className={styles.titleContainer}>
            <h2>{info.title}</h2>
          </div>
          <div className={styles.lottieContainer}>
            <Lottieplayer
              ref={(el) => (lottieRefs.current[i] = el)}
              src={info.lottieLink}
              keepLastFrame={true}
              className={styles.lottie}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
