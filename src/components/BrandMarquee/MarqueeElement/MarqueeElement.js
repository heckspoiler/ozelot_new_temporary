import React from 'react';

import styles from './MarqueeElement.module.css';

export default function MarqueeElement({ src, alt, brandname, url, index }) {
  return (
    <div className={styles.container} key={`${brandname} ${index}`}>
      <div className={styles.imageContainer}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
