import React, { useEffect, useState } from 'react';
import styles from './LandingTitle.module.css';
import LandingTitleSvg from './LandingTitleSvg/LandingTitleSvg';
import LandingTitleMobile from './LandingTitleSvg/LandingTitleMobile';

import { useMobile } from '../../MobileProvider/MobileProvider';

const LandingTitle = () => {
  const today = new Date();
  const endDate = new Date('2025-01-31');
  const startDate = new Date('2024-11-15');

  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const daysLeft = (endDate - today) / (1000 * 60 * 60 * 24);

  const progress = ((totalDays - daysLeft) / totalDays) * 100;

  const isMobile = useMobile();

  console.log(isMobile);

  return (
    <div className={styles.titleContainer}>
      <LandingTitleSvg />
      <div
        className={styles.block}
        style={{
          left: `${-100 + progress}%`,
        }}
      />
    </div>
  );
};

export default LandingTitle;
