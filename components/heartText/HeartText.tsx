import React from 'react';
import styles from './heartText.module.css';
import heart from '../../public/static/heart.svg'

/**
 * Primary UI component for user interaction
 */
export const HeartText = () => {
  console.log(heart)
  return (
    <div className={styles.heartText}>
      Made with Next.js and <img className={styles.heart} src={heart.src} alt="❤️" /> by James
    </div >
  );
};
