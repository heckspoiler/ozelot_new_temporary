import React from 'react';

import styles from './BrandMarquee.module.css';

import Marquee from 'react-fast-marquee';
import MarqueeElement from './MarqueeElement/MarqueeElement';

import { brandArray } from './BrandObject/BrandObject';

console.log(brandArray[0].path);

export default function BrandMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <Marquee gradient={false} speed={30} autoFill pauseOnHover>
        {brandArray.map((brand, index) => (
          <MarqueeElement
            src={brand.src}
            alt={brand.alt}
            brandname={brand.name}
            url={brand.url}
            path={brand.path}
            index={index}
          />
        ))}
      </Marquee>
    </section>
  );
}
