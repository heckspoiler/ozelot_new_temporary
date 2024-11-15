import React from 'react';
import styles from './LandingTitle.module.css';

import LandingTitleSvg from './LandingTitleSvg/LandingTitleSvg';

const LandingTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <LandingTitleSvg />
      <div className={styles.block}></div>
    </div>
  );
};

export default LandingTitle;
