"use client";

import React from 'react';
import { Space_Mono, Barlow_Condensed, Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className={styles.aboutWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.aboutCard}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.titleBlockWrapper}>
            <div className={styles.verticalBar}></div>
            <div className={`${styles.titleText} ${barlow.className}`}>
              <h2 className={styles.titleAbout}>ABOUT</h2>
              <h2 className={styles.titleMe}>ME</h2>
              <span className={`${styles.protocolLabel} ${spaceMono.className}`}>
                PROTOCOL // SYSTEM ARCHITECTURE
              </span>
            </div>
          </div>
          <div className={styles.titleDivider}></div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Hero Phrase */}
          <div className={`${styles.heroPhrase} ${barlow.className}`}>
            <span className={styles.phraseLine1}>I BUILD ARCHITECTURES THAT</span>
            <span className={styles.phraseLine2}>KILL FRICTION.</span>
          </div>

          <hr className={styles.mainDivider} />

          {/* Text Content */}
          <div className={styles.textContent}>
            <p className={`${styles.description} ${inter.className}`}>
              I like building interfaces that don’t just look good, but feel intuitive, fast, and alive. My focus is on frontend development—crafting smooth, responsive experiences that make people pause and notice the details.
            </p>
            <p className={`${styles.description} ${inter.className}`}>
              I work at the intersection of design and logic, where creativity meets performance. From subtle micro-interactions to bold UI concepts, I enjoy creating interfaces that feel fluid, dynamic, and just a little unexpected.
            </p>
            <p className={`${styles.description} ${inter.className}`}>
              I’m constantly experimenting, learning, and pushing my limits to build better, faster, and smarter interfaces. If it’s ambitious or pushes the boundaries of the web—I’m in.
            </p>
          </div>


        </div>
      </div>
    </motion.section>
  );
};

export default About;
