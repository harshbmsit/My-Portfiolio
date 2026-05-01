"use client";

import React, { useState } from 'react';
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
    name: 'FULLSTACK',
    registryLabel: 'OPERATIONAL REGISTRY // 01',
    statement: 'DELIVERING PRODUCTION-READY WEB INTERFACES FROM ARCHITECTURE TO DEPLOYMENT.',
    footnote: 'UTILIZING A VERSATILE ARSENAL FOR',
    tech: [
      { name: 'Next.js',       icon: 'https://cdn.simpleicons.org/nextdotjs' },
      { name: 'React',         icon: 'https://cdn.simpleicons.org/react' },
      { name: 'React Native',  icon: 'https://cdn.simpleicons.org/react' },
      { name: 'JavaScript',    icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
      { name: 'Tailwind CSS',  icon: 'https://cdn.simpleicons.org/tailwindcss' },
    ],
  },
  {
    id: 'aiml',
    label: 'RESEARCH // DATA',
    name: 'AI & ML',
    registryLabel: 'OPERATIONAL REGISTRY // 02',
    statement: 'BUILDING INTELLIGENT SYSTEMS WITH DATA-DRIVEN PRECISION AND RESEARCH-GRADE RIGOR.',
    footnote: 'LEVERAGING CUTTING-EDGE TOOLS FOR',
    tech: [
      { name: 'Python',        icon: 'https://cdn.simpleicons.org/python' },
      { name: 'PyTorch',       icon: 'https://cdn.simpleicons.org/pytorch' },
      { name: 'TensorFlow',    icon: 'https://cdn.simpleicons.org/tensorflow' },
      { name: 'OpenAI',        icon: '/tech-icons/openai.svg' },
      { name: 'Hugging Face',  icon: 'https://cdn.simpleicons.org/huggingface' },
      { name: 'Scikit-learn',  icon: 'https://cdn.simpleicons.org/scikitlearn' },
    ],
  },
  {
    id: 'automation',
    label: 'HARSH // PROJECTS',
    name: 'AUTOMATION',
    registryLabel: 'OPERATIONAL REGISTRY // 03',
    statement: 'ENGINEERING AUTONOMOUS WORKFLOWS THAT OPERATE WITHOUT HUMAN INTERVENTION.',
    footnote: 'DEPLOYING SYSTEMS BUILT FOR',
    tech: [
      { name: 'Docker',        icon: 'https://cdn.simpleicons.org/docker' },
      { name: 'GitHub Actions',icon: 'https://cdn.simpleicons.org/githubactions' },
      { name: 'FastAPI',       icon: 'https://cdn.simpleicons.org/fastapi' },
      { name: 'PostgreSQL',    icon: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'Redis',         icon: 'https://cdn.simpleicons.org/redis' },
      { name: 'AWS',           icon: '/tech-icons/aws.svg' },
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
        <div className={styles.verticalBar}></div>
        <h2 className={`${styles.techTitle} ${barlow.className}`}>
          <span className={styles.techSolid}>TECH</span>
          <span className={styles.techHollow}>STACK</span>
        </h2>
      </div>

      {/* Main Panel */}
      <div className={styles.mainPanel}>
        {/* Tab Switcher */}
        <div className={styles.tabSwitcher}>
          {TABS.map((tab, index) => (
            <div 
              key={tab.id}
              className={`${styles.tabCell} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className={`${styles.tabLabel} ${spaceMono.className}`}>
                {tab.label}
              </span>
              <span className={`${styles.tabName} ${barlow.className}`}>
                {tab.name}
              </span>
            </div>
          ))}
        </div>

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
                <div key={item.name} className={styles.techCell}>
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className={styles.ghostIcon} 
                  />
                  <span className={`${styles.techName} ${inter.className}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
