import React from 'react';

import envelope from '../../../images/envelope.png';

import styles from './ContactButton.module.css';

export default function ContactButton() {
  return (
    <div className={styles.container}>
      <a href="mailto:info@ozelot.ltd">
        <div>
          <img src={envelope} alt="envelope" />
        </div>
        <p>CONTACT</p>
      </a>
    </div>
  );
}
