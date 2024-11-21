import React from 'react';

import LandingTitle from './LandingTitle/LandingTitle';
import styles from './UpperContainer.module.css';
import ContactButton from './ContactButton/ContactButton';

export default function UpperContainer() {
  return (
    <section className={styles.main}>
      <LandingTitle />
      <ContactButton />
    </section>
  );
}
