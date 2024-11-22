import React, { useState, useEffect } from 'react';

import styles from './MarqueeElement.module.css';

export default function MarqueeElement({ src, alt, brandname, url, index }) {
  return (
    <div className={styles.container} key={`${brandname} ${index}`}>
      <div className={styles.textContainer}>
        <p>{brandname}</p>
      </div>

      <a href={url ? url : ''} target="_blank" rel="noreferrer">
        <div className={styles.imageContainer}>
          <div className={styles.overlay}></div>
          <img src={src} alt={alt} />
        </div>
      </a>
    </div>
  );
}
