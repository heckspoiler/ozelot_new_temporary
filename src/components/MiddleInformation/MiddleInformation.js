import React, { useEffect, useState, useRef } from 'react';
import styles from './MiddleInformation.module.css';
import { Player as Lottieplayer } from '@lottiefiles/react-lottie-player';
import { information } from './info';

export default function MiddleInformation({ hoveredItem, setHoveredItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(1);
  const lottieRefs = useRef([]);

  useEffect(() => {
    lottieRefs.current = lottieRefs.current.slice(0, information.length);
  }, []);

  useEffect(() => {
    lottieRefs.current.forEach((ref) => {
      if (ref) {
        ref.setPlayerDirection(isHovered ? 1 : -1);
        ref.setPlayerSpeed(isHovered ? 3 : 2);
        ref.play();
      }
    });
  }, [isHovered]);

  return (
    <div className={styles.informationContainer}>
      {information.map((info, i) => (
        <div
          key={i}
          className={styles.information}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
