import React from 'react';
import styles from './heartText.module.css';

/**
 * Primary UI component for user interaction
 */
export const HeartText = () => {
  return (
    <div className={styles.heartText}>
      Made with Next.js and <span className={styles.heart}>❤️</span> by James
    </div>
  );
};
