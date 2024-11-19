import React, { useEffect, useState } from 'react';

import styles from './MiddleInformation.module.css';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { information } from './info';

export default function MiddleInformation() {
  const [playMode, setPlayMode] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.informationContainer}>
      {information.map((info, index) => {
        return (
          <div key={index} className={styles.information}>
            <h2>{info.title}</h2>
            <div className={styles.lottieContainer}>
              <DotLottieReact src={info.lottieLink} playOnHover speed={2} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
