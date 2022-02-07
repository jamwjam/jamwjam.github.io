import React from 'react';
import styles from './heartText.module.css';
import Image from 'next/image'

/**
 * Primary UI component for user interaction
 */
export const HeartText = () => {
  return (
    <div className={styles.heartText}>
      Made with Next.js and <Image className={styles.heart} src="/static/heart.svg" width="19.2px" height="16px" /> by James
    </div >
  );
};
