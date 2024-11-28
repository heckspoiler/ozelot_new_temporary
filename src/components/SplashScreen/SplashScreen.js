import React, { useState, useEffect } from 'react';

import styles from './SplashScreen.module.css';

import soundcloud from '../../images/svg/socials/soundcloud.svg';
import insta from '../../images/svg/socials/insta.svg';
import spotify from '../../images/svg/socials/spotify.svg';
import bandcamp from '../../images/svg/socials/bandcamp.svg';

import Logo from './Logo/Logo';

export default function SplashScreen({ setIsSplashscreen }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsSplashscreen(false);
      }, 1000);
    }
  }, [isClicked, setIsSplashscreen]);
  return (
    <section
      className={`${styles.main} ${isClicked ? styles.splashScreenGone : null}`}
    >
      <div className={styles.textContainer}>
        <h1>Ozelot Studios is transforming</h1>
        <p>
          We are expanding our creative horizons and reshaping our approach to
          meet the evolving demands of the future. Our mission is to push
          boundaries at the intersection of technology and creativity. We're
          investing in cutting-edge technologies and a “the physical” to deliver
          exceptional experiences.
        </p>

        <div className={styles.socialsContainer}>
          <h4>Meanwhile, follow us on our socials to stay put!</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/ozelotltd/?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://ozelot-ltd.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={bandcamp} alt="Spotify" />
            </a>
            <a
              href="https://soundcloud.com/ozelot-ltd"
              target="_blank"
              rel="noreferrer"
            >
              <img src={soundcloud} alt="Soundcloud" />
            </a>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => setIsClicked(true)}>Enter</button>
        </div>
      </div>
      <div className={styles.block}></div>
      <div className={styles.logoContainer}>
        <div className={styles.logoDiv}>
          <Logo />
        </div>
      </div>
    </section>
  );
}
