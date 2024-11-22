import React from 'react';

import styles from './MarqueeElement.module.css';

export default function MarqueeElement({ src, alt, brandname }) {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} key={brandname} />
    </div>
  );
}
