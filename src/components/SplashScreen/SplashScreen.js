import React, { useState, useEffect } from 'react';

import styles from './SplashScreen.module.css';

import soundcloud from '../../images/svg/socials/soundcloud.svg';
import insta from '../../images/svg/socials/insta.svg';
import spotify from '../../images/svg/socials/spotify.svg';

import Logo from './Logo/Logo';

export default function SplashScreen({ isSplashScreen, setIsSplashscreen }) {
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
        <h1>Something is cooking at ozelot studios</h1>
        <p>
          Ozelot Studios is transforming. As advocates of digital innovation,
          we're expanding our creative horizons and reshaping our approach to
          meet the evolving demands of the digital age. Our mission is to push
          boundaries at the intersection of technology and creativity. We're
          investing in cutting-edge technologies and cultivating fresh
          perspectives to deliver exceptional digital experiences. From
          immersive web applications to innovative design solutions, we're
          building a future where technology enhances creative expression. We
          remain committed to our core values while embracing new possibilities.
          This transformation positions Ozelot Studios as a forward-thinking
          creative partner ready to tackle the challenges of tomorrow's digital
          landscape. Join us as we shape the future of digital creativity.
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
              href="https://www.instagram.com/ozelotltd/?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              <img src={spotify} alt="Spotify" />
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
          <button onClick={() => setIsClicked(true)}>Enter Ozelot.ltd</button>
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
