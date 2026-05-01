"use client";

import React, { useState } from 'react';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import { FiArrowRight, FiGithub, FiLinkedin, FiInstagram, FiDownload, FiZap } from 'react-icons/fi';
import Magnetic from '../Magnetic/Magnetic';
import styles from './ContactFooter.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['800', '900'],
  style: ['normal', 'italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// ─── Edit contact info here ──────────────────────────────────────────────────
const CONTACT_INFO = {
  email: 'harshgupta032006@gmail.com',
  github: 'https://github.com/harshbmsit',
  linkedin: 'https://www.linkedin.com/in/harsh-gupta-334269382/',
  instagram: 'https://www.instagram.com/harsh.03_007/',
  resume: '/resume.pdf',
  ctaBannerText:
    'THESE STANDARDS ENSURE THAT EVERY SYSTEM BUILT UNDER THE HARSH GUPTA BANNER REMAINS RESILIENT, AUDITABLE, AND TRULY AUTONOMOUS.',
  grade: 'SORCERER GRADE: SENIOR AUTOMATION ENGINEER',
  tagline: 'EXTRACTING VALUE FROM CHAOTIC DATA REGIMES.',
  location: 'BENGALURU // INDIA',
};
// ────────────────────────────────────────────────────────────────────────────

const ContactFooter: React.FC = () => {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <footer className={styles.footerWrapper} id="contact">

      {/* ═══════════════════════════════════════════════════════════════
          PART 1 — DARK CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <div className={styles.ctaBanner}>
        {/* Left: Closing statement */}
        <p className={`${styles.ctaStatement} ${inter.className}`}>
          {CONTACT_INFO.ctaBannerText}
        </p>

        {/* Right: CONNECT + arrow */}
        <a
          href={`mailto:${CONTACT_INFO.email}?subject=Inquiry&body=Hey%20Harsh%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20love%20to%20connect.`}
          className={styles.ctaRight}
          onMouseEnter={() => setArrowHovered(true)}
          onMouseLeave={() => setArrowHovered(false)}
        >
          <div className={styles.ctaTextGroup}>
            <span className={`${styles.ctaMicroLabel} ${spaceMono.className}`}>
              ESTABLISH_LINK
            </span>
            <span className={`${styles.ctaConnect} ${barlow.className}`}>CONNECT</span>
          </div>
          <div
            className={styles.arrowBox}
            style={{
              background: arrowHovered ? '#ffffff' : 'transparent',
            }}
          >
            <FiArrowRight
              className={styles.arrowIcon}
              style={{ color: arrowHovered ? '#000000' : '#ffffff' }}
            />
          </div>
        </a>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PART 2 — WHITE CONTACT AREA
      ════════════════════════════════════════════════════════════════ */}
      <div className={styles.contactArea}>
        <div className={styles.contactGrid}>

          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            {/* Chapter badge */}
            <div className={`${styles.chapterBadge} ${spaceMono.className}`}>
              FINAL CHAPTER: CONTACT
            </div>

            {/* Massive name */}
            <h2 className={`${styles.nameHeading} ${barlow.className}`}>
              <span className={styles.nameLine}>HARSH</span>
              <span className={styles.nameLine}>GUPTA</span>
            </h2>

            {/* Underline */}
            <div className={styles.nameRule}></div>

            {/* Email */}
            <div className={styles.inquiriesBlock}>
              <span className={`${styles.inquiriesLabel} ${inter.className}`}>INQUIRIES</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={`${styles.emailLink} ${inter.className}`}
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightCol}>
            {/* Role line */}
            <div className={styles.roleLine}>
              <FiZap className={styles.zapIcon} />
              <span className={`${styles.roleText} ${spaceMono.className}`}>
                {CONTACT_INFO.grade}
              </span>
            </div>

            {/* Tagline */}
            <p className={`${styles.tagline} ${inter.className}`}>
              {CONTACT_INFO.tagline}
            </p>

            {/* Social buttons */}
            <div className={styles.socialRow}>
              <Magnetic>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
              </Magnetic>
            </div>

            {/* Thick rule */}
            <div className={styles.socialRule}></div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════
            PART 3 — FOOTER BAR
        ══════════════════════════════════════════════════════════════ */}
        <div className={styles.footerBar}>
          <span className={`${styles.footerItem} ${spaceMono.className}`}>
            BENGALURU // INDIA
          </span>
          <span className={`${styles.footerItem} ${spaceMono.className}`}>
            © 2026 HARSH_SYSTEMS
          </span>
          <span className={`${styles.footerItem} ${spaceMono.className}`}>
            VOL. 01 &nbsp;&nbsp; PAGE 404
          </span>
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;
