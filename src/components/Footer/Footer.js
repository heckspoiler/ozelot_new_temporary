import React from 'react';

import styles from './Footer.module.css';

import logo from '../../images/logo.png';

import insta from '../../images/svg/socials/insta.svg';
import spotify from '../../images/svg/socials/spotify.svg';

import soundcloud from '../../images/svg/socials/soundcloud.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Ozelot Logo" />
      </div>
      <div className={styles.addressContainer}>
        <h3>Ozelot Studios GmbH</h3>
        <p>Martastrasse 114</p>
        <p>CH - 8003 Zurich</p>
      </div>
      <div className={styles.socialsContainer}>
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
    </footer>
  );
}
