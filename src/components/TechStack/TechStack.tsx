"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import styles from './TechStack.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['800', '900'],
  style: ['normal', 'italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
});

const TABS = [
  {
    id: 'fullstack',
    label: 'DEVELOPMENT // WEB',
    name: 'FRONTEND',
    registryLabel: 'OPERATIONAL REGISTRY // 01',
    statement: 'DELIVERING PRODUCTION-READY WEB INTERFACES FROM ARCHITECTURE TO DEPLOYMENT.',
    footnote: 'UTILIZING A VERSATILE ARSENAL FOR',
    tech: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', level: 'PROFICIENT', description: 'primary scripting & automation language' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', level: 'COMPETENT', description: 'dom, async, full browser control' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', level: 'COMPETENT', description: 'semantic structure, seo, accessibility' },
      { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', level: 'COMPETENT', description: 'layouts, animations, responsive design' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', level: 'LEARNING', description: 'component architecture, hooks, state' },
      { name: 'Security learning', icon: 'https://cdn.simpleicons.org/kalilinux/557C94', level: 'PROFICIENT', description: 'ctf, recon, exploitation, hardening' },
      { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC', level: 'COMPETENT', description: 'systems level, memory, pointers' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', level: 'COMPETENT', description: 'typed js, interfaces, generics' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', level: 'COMPETENT', description: 'utility-first, rapid ui building' },
    ],
  },
];

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = TABS[activeTab];

  return (
    <section className={styles.techSection}>
      {/* Heading */}
      <div className={styles.headingRow}>
        <h2 className={`${styles.techTitle} ${barlow.className}`}>
          <span className={styles.techSolid}>FRONTEND</span>
          <span className={styles.techHollow}>DEVELOPER</span>
        </h2>
      </div>

      {/* Main Panel */}
      <div className={styles.mainPanel}>
        {/* Content Panel */}
        <div className={styles.contentPanel}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.topContent}>
              <div className={`${styles.registryBadge} ${spaceMono.className}`}>
                {current.registryLabel}
              </div>
              <h3 className={`${styles.statement} ${inter.className}`}>
                {current.statement}
              </h3>
            </div>

            <div className={styles.bottomContent}>
              <div className={styles.divider}></div>
              <p className={`${styles.footnote} ${inter.className}`}>
                {current.footnote} <span className={styles.brandName}>HARSH</span> ENTERPRISE SOLUTIONS.
              </p>
              <div className={styles.systemLine}>
                <span className={`${styles.systemText} ${spaceMono.className}`}>
                  SYSTEMS // 2026 // HARSH GUPTA
                </span>
                <div className={styles.trailingLine}></div>
              </div>
            </div>
          </div>

          {/* Right Column: Icons Grid */}
          <div className={styles.rightCol}>
            <div className={styles.techGrid}>
              {current.tech.map((item) => (
                <motion.div 
                  key={item.name} 
                  className={styles.techCell}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5, 
                    boxShadow: "0px 15px 30px rgba(0, 242, 255, 0.25)",
                    borderColor: "#00f2ff"
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className={styles.ghostIcon} 
                  />
                  <div className={styles.techCellContent}>
                    <span className={`${styles.techName} ${inter.className}`}>
                      {item.name}
                    </span>
                    {(item as any).level && (
                      <span className={`${styles.techLevel} ${spaceMono.className}`}>
                        {(item as any).level}
                      </span>
                    )}
                    {(item as any).description && (
                      <span className={`${styles.techDesc} ${inter.className}`}>
                        {(item as any).description}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
