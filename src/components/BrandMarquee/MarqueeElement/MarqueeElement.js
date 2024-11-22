import React from 'react';

import styles from './MarqueeElement.module.css';

export default function MarqueeElement({ src, alt, brandname, url }) {
  return (
    <div className={styles.container}>
      <a href={url ? url : ''} target="_blank" rel="noreferrer">
        <img src={src} alt={alt} key={brandname} />
      </a>
    </div>
  );
}
