import React, { useEffect, useState, useRef } from 'react';
import styles from './MiddleInformation.module.css';
import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';
import { information } from './info';

/**
 * @typedef {Object} AnimationConfig
 * @property {number} direction - The direction of the animation (1 for forward, -1 for reverse)
 * @property {number} speed - The speed of the animation
 */

const ANIMATION_CONFIGS = {
  hover: { direction: 1, speed: 3 },
  unhover: { direction: -1, speed: 2 },
};

/**
 * Handles the animation of a single Lottie player
 * @param {Object} ref - Reference to the Lottie player
 * @param {AnimationConfig} config - Animation configuration
 */
const playAnimation = (ref, { direction, speed }) => {
  if (!ref) return;

  ref.setPlayerDirection(direction);
  ref.setPlayerSpeed(speed);
  ref.play();
};

/**
 * Individual information card component
 */
const InformationCard = ({ info, index, onHover, onLeave, lottieRef }) => (
  <div
    className={styles.information}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onLeave(index)}
  >
    <div className={styles.titleContainer}>
      <h2>{info.title}</h2>
    </div>
    <div className={styles.lottieContainer}>
      <LottiePlayer
        ref={(el) => (lottieRef.current[index] = el)}
        src={info.lottieLink}
        keepLastFrame={true}
        className={styles.lottie}
      />
    </div>
  </div>
);

/**
 * MiddleInformation component displays a grid of animated information cards
 * @param {Object} props - Component props
 * @param {number|null} props.hoveredItem - Currently hovered item index
 * @param {Function} props.setHoveredItem - Function to update hovered item
 */
export default function MiddleInformation({ hoveredItem, setHoveredItem }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const lottieRefs = useRef([]);

  // Initialize refs array
  useEffect(() => {
    lottieRefs.current = lottieRefs.current.slice(0, information.length);
  }, []);

  // Handle hover animation and state
  useEffect(() => {
    if (hoveredIndex === null) return;

    const ref = lottieRefs.current[hoveredIndex];
    playAnimation(ref, ANIMATION_CONFIGS.hover);
    setHoveredItem(hoveredIndex);
  }, [hoveredIndex, setHoveredItem]);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = (index) => {
    const ref = lottieRefs.current[index];
    playAnimation(ref, ANIMATION_CONFIGS.unhover);
    setHoveredIndex(null);
    // setHoveredItem(null);
  };

  return (
    <div className={styles.informationContainer}>
      {information.map((info, index) => (
        <InformationCard
          key={index}
          info={info}
          index={index}
          onHover={handleHover}
          onLeave={handleLeave}
          lottieRef={lottieRefs}
        />
      ))}
    </div>
  );
}
