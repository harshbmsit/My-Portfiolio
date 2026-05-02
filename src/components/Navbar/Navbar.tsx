"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiInstagram, FiMenu, FiX } from 'react-icons/fi';
import { RxCube } from 'react-icons/rx';
import { Playfair_Display, Josefin_Sans, JetBrains_Mono } from 'next/font/google';
import Magnetic from '../Magnetic/Magnetic';
import styles from './Navbar.module.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
});

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Left Section: Logo */}
      <div className={styles.leftSection}>
        <div className={`${styles.logo} ${playfair.className}`}>
          <div className={styles.logoLine1}>
            HARSH 
            <span className={styles.bolt}>
              <RxCube className={styles.logoSymbol} />
            </span>
          </div>
          <div className={styles.logoLine2}>
            GUPTA
          </div>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Right Section: Links + Icons */}
      <div className={`${styles.rightSection} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={`${styles.navLinks} ${josefin.className}`}>
          <Magnetic strength={20}>
            <Link href="#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
          </Magnetic>
          <Magnetic strength={20}>
            <Link href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          </Magnetic>
          <Magnetic strength={20}>
            <Link href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </Magnetic>
        </div>

        <span className={styles.separator}>/</span>

        <div className={styles.icons}>
          <Magnetic>
            <a 
              href="https://www.linkedin.com/in/harsh-gupta-334269382/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="https://github.com/harshbmsit" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="https://www.instagram.com/harsh.03_007?igsh=MWIxbzQ1bmFoaDJxcA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
