import React from 'react';

import styles from './ContactButton.module.css';
import Envelope from './Envelope/Envelope';

export default function ContactButton() {
  return (
    <div className={styles.container}>
      <a href="mailto:info@ozelot.ltd">
        <Envelope />

        <p>CONTACT</p>
      </a>
    </div>
  );
}
