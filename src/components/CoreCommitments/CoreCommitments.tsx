import React from 'react';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import { FiSearch, FiZap, FiShield, FiMinus } from 'react-icons/fi';
import styles from './CoreCommitments.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['800', '900'],
  style: ['normal', 'italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

// ─── Edit this array to update commitments ──────────────────────────────────
const COMMITMENTS = [
  {
    ref: '01',
    icon: 'search',
    title: 'AUDITABLE\nARCHITECTURE',
    standard: 'We prioritize transparent logic over black-box implementations that lack audit trails.',
    outcome: 'YOU RECEIVE SYSTEMS WHERE EVERY DECISION IS TRACEABLE AND VERIFIABLE.',
  },
  {
    ref: '02',
    icon: 'zap',
    title: 'AUTONOMOUS\nOPERATIONS',
    standard: 'We decline projects that rely on manual intervention for core processing tasks.',
    outcome: 'END-TO-END AUTOMATION DESIGNED TO OPERATE 24/7 WITHOUT HUMAN OVERSIGHT.',
  },
  {
    ref: '03',
    icon: 'shield',
    title: 'SYSTEM\nRESILIENCE',
    standard: 'We forgo rapid, fragile deployments in favor of rigorous, stress-tested correctness.',
    outcome: 'ARCHITECTURES THAT MAINTAIN DATA INTEGRITY UNDER EXTREME CONDITIONS.',
  },
];
// ────────────────────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ReactNode> = {
  search: <FiSearch />,
  zap: <FiZap />,
  shield: <FiShield />,
};

const CoreCommitments: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Heading */}
      <div className={styles.headingRow}>
        <h2 className={`${styles.headingSolid} ${barlow.className}`}>CORE</h2>
        <h2 className={`${styles.headingHollow} ${barlow.className}`}>COMMITMENTS</h2>
      </div>

      {/* Three-column panel */}
      <div className={styles.panel}>
        {COMMITMENTS.map((item, i) => (
          <div
            key={item.ref}
            className={`${styles.card} ${i < COMMITMENTS.length - 1 ? styles.cardBorder : ''}`}
          >
            {/* ① Icon */}
            <div className={styles.icon}>{iconMap[item.icon]}</div>

            {/* ② Title */}
            <h3 className={`${styles.cardTitle} ${barlow.className}`}>
              {item.title.split('\n').map((line, j) => (
                <React.Fragment key={j}>
                  {line}
                  {j < item.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>

            {/* ③ Operating Standard */}
            <div className={styles.subBlock}>
              <p className={`${styles.microLabel} ${spaceMono.className}`}>OPERATING_STANDARD</p>
              <p className={`${styles.standardText} ${inter.className}`}>{item.standard}</p>
            </div>

            {/* ④ Delivered Outcome */}
            <div className={`${styles.subBlock} ${styles.outcomeBlock}`}>
              <p className={`${styles.microLabel} ${spaceMono.className}`}>DELIVERED_OUTCOME</p>
              <p className={`${styles.outcomeText} ${barlow.className}`}>{item.outcome}</p>
            </div>

            {/* ⑤ Footer */}
            <div className={styles.cardFooter}>
              <span className={`${styles.refCode} ${spaceMono.className}`}>
                REF_CODE // {item.ref}
              </span>
              <FiMinus className={styles.footerDash} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCommitments;
