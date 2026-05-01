import React from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Inter } from 'next/font/google';
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
  return (
    <section className={styles.heroSection}>
      {/* Left Edge: Vertical Text */}
      <div className={`${styles.verticalTextWrapper} ${inter.className}`}>
        <span className={styles.verticalText}>KEEP SCROLLING</span>
        <div className={styles.verticalLine}></div>
      </div>

      {/* Left Side: Text Content */}
      <div className={styles.leftSide}>
        <h1 className={`${styles.mainHeading} ${barlow.className}`}>
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
        <div className={styles.portraitWrapper}>
          <Image 
            src="/images/hero-portrait.jpg" 
            alt="Harsh Gupta Portrait" 
            fill
            className={styles.portrait}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
