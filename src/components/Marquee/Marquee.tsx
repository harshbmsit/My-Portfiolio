"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Mono } from 'next/font/google';
import styles from './Marquee.module.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
});

const text = "FRONTEND DEVELOPER // UI/UX DESIGNER // INTERACTIVE DEVELOPER  // ";

const Marquee: React.FC = () => {
  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        className={`${styles.marqueeTrack} ${spaceMono.className}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
        <span className={styles.marqueeText}>{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
