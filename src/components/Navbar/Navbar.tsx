import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { Playfair_Display, Josefin_Sans, JetBrains_Mono } from 'next/font/google';
import styles from './Navbar.module.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['500'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
});

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Section: Logo */}
      <div className={styles.leftSection}>
        <div className={`${styles.logo} ${playfair.className}`}>
          <div className={styles.logoLine1}>
            HARSH <span className={styles.bolt}><BsFillLightningChargeFill /></span>
          </div>
          <div className={styles.logoLine2}>
            GUPTA
          </div>
        </div>
      </div>

      {/* Right Section: Links + Icons + Resume */}
      <div className={styles.rightSection}>
        <div className={`${styles.navLinks} ${josefin.className}`}>
          <Link href="#projects" className={styles.navLink}>PROJECTS</Link>
          <Link href="#about" className={styles.navLink}>ABOUT</Link>
          <Link href="#contact" className={styles.navLink}>CONTACT</Link>
          <Link href="#blog" className={styles.navLink}>BLOG</Link>
        </div>

        <span className={styles.separator}>/</span>

        <div className={styles.icons}>
          <a 
            href="https://www.linkedin.com/in/harsh-gupta-334269382/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a 
            href="https://github.com/harshbmsit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.instagram.com/harsh.03_007?igsh=MWIxbzQ1bmFoaDJxcA==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </div>
        
        <button className={`${styles.resumeBtn} ${mono.className}`}>
          RESUME / &rarr;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
