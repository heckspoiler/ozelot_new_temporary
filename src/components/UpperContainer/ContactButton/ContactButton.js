import React from 'react';

import styles from './ContactButton.module.css';
import Logo from '../../SplashScreen/Logo/Logo';

export default function ContactButton() {
  return (
    <div className={styles.container}>
      <a href="mailto:studio@ozelot.ltd">
        <Logo height={30} width={30} />
        <p>CONTACT</p>
      </a>
    </div>
  );
}
