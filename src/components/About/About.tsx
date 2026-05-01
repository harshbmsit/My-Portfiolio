import React from 'react';
import { Space_Mono, Barlow_Condensed, Inter } from 'next/font/google';
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
    <section className={styles.aboutWrapper}>
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

          {/* Info Grid */}
          <div className={styles.infoGrid}>
            {/* Column 1 */}
            <div className={styles.infoColumn}>
              <div className={styles.categoryRow}>
                <span className={`${styles.mainLabel} ${barlow.className}`}>01. AUTOMATION</span>
                <span className={`${styles.subLabel} ${spaceMono.className}`}>// OPSORA</span>
              </div>
              <p className={`${styles.description} ${inter.className}`}>
                Engineering <strong><em>Opsora Workflow Engine</em></strong>: A custom automation suite designed to eliminate operational bottlenecks in high-growth studio environments.
              </p>
            </div>

            {/* Column 2 */}
            <div className={styles.infoColumn}>
              <div className={styles.categoryRow}>
                <span className={`${styles.mainLabel} ${barlow.className}`}>02. INTELLIGENCE</span>
                <span className={`${styles.subLabel} ${spaceMono.className}`}>// RESEARCH</span>
              </div>
              <p className={`${styles.description} ${inter.className}`}>
                Developing <strong><em>Agentic Context Mapping</em></strong> with LLMs to interpret complex system architectures and provide real-time optimization strategies.
              </p>
            </div>
          </div>

          {/* Status Bar */}
          <div className={styles.statusBar}>
            <div className={styles.pulseDot}></div>
            <span className={`${styles.statusText} ${spaceMono.className}`}>
              CURRENT STATUS: OPERATIONAL // BENGALURU, INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
