import React from 'react';

import styles from './BrandMarquee.module.css';

import Marquee from 'react-fast-marquee';
import MarqueeElement from './MarqueeElement/MarqueeElement';

import { brandArray } from './BrandObject/BrandObject';

export default function BrandMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <Marquee gradient={false} speed={40}>
        {brandArray.map((brand) => (
          <MarqueeElement
            src={brand.src}
            alt={brand.alt}
            brandname={brand.brandname}
          />
        ))}
      </Marquee>
    </section>
  );
}
