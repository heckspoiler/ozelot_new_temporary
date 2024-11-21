import React from 'react';

import LandingTitle from '../LandingTitle/LandingTitle';
import styles from './UpperContainer.module.css';

export default function UpperContainer() {
  return (
    <section className={styles.main}>
      <LandingTitle />
    </section>
  );
}
