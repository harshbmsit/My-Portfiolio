"use client";

import React from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Inter } from 'next/font/google';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <motion.section 
      className={styles.heroSection}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Edge: Vertical Text */}
      <div className={`${styles.verticalTextWrapper} ${inter.className}`}>
        <span className={styles.verticalText}>KEEP SCROLLING</span>
        <div className={styles.verticalLine}></div>
      </div>

      {/* Left Side: Text Content */}
      <div className={styles.leftSide}>
        <h1 className={`${styles.mainHeading} ${barlow.className}`} data-text={"HI, I'M\nHARSH"}>
          HI, I'M <br /> HARSH
        </h1>
        
        <div className={styles.bottomInfo}>
          <div className={styles.badgeRow}>
            <div className={`${styles.badge} ${inter.className}`}>
              Developer & Designer
            </div>
            <div className={styles.stackedInfo}>
              <p className={`${styles.roleDesc} ${inter.className}`}>
              
              </p>
              <p className={`${styles.location} ${inter.className}`}>
                BASED IN BENGALURU, IN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Portrait Photo */}
      <div className={styles.rightSide}>
        <motion.div 
          className={styles.portraitWrapper}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: yParallax, willChange: "transform" }}
        >
          <Image 
            src="/images/hero-portrait.jpg" 
            alt="Harsh Gupta Portrait" 
            fill
            className={styles.portrait}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
