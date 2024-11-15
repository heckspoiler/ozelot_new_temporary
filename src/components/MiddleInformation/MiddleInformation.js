import React from 'react';

import styles from './MiddleInformation.module.css';

import { information } from './info';

export default function MiddleInformation() {
  return (
    <div className={styles.informationContainer}>
      {information.map((info, index) => {
        return (
          <div key={index} className={styles.information}>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <p>{info.stats}</p>
            <ul>
              {info.services.map((service, index) => {
                return <li key={index}>{service}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
