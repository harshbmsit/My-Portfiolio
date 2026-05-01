"use client";

import React, { useState } from 'react';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import { FiEye, FiBarChart2, FiClock, FiArrowUpRight } from 'react-icons/fi';
import styles from './FeaturedBlog.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
});

// ─── Edit this object to update the featured article ────────────────────────
const FEATURED_ARTICLE = {
  category: 'WEB_DEVELOPMENT',
  title: 'HOW I ENGINEERED A BRUTALIST PORTFOLIO FROM SCRATCH USING NEXT.JS AND FRAMER MOTION',
  excerpt:
    'A DEEP DIVE INTO THE ARCHITECTURE, DESIGN DECISIONS, AND PERFORMANCE OPTIMIZATIONS THAT WENT INTO BUILDING A HIGH-FIDELITY EDITORIAL PORTFOLIO — FROM ZERO TO DEPLOYMENT.',
  subExcerpt:
    'COVERING COMPONENT DESIGN SYSTEMS, CUSTOM ANIMATION RIGS, VIEWPORT-AWARE SCALING STRATEGIES, AND THE REASONING BEHIND EVERY MAJOR TECHNICAL CHOICE ALONG THE WAY.',
  stats: {
    views: 196,
    impressions: 90,
    readTime: 8,         // minutes
  },
  tags: ['NEXT.JS', 'FRAMER MOTION', 'TYPESCRIPT', 'CSS MODULES'],
  publishDate: 'APR 2026',
  href: 'https://medium.com/@harshgupta',
  ctaLabel: 'ACCESS_FULL_DEBRIEF',
};
// ────────────────────────────────────────────────────────────────────────────

const FeaturedBlog: React.FC = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className={styles.section}>
      {/* Section Label */}
      <div className={styles.labelRow}>
        <div className={styles.labelDot}></div>
        <span className={`${styles.labelText} ${spaceMono.className}`}>
          FEATURED_INTELLIGENCE // HIGH_ENGAGEMENT
        </span>
      </div>

      {/* Main Article Card */}
      <div className={styles.card}>

        {/* LEFT — Stats Panel */}
        <div className={styles.statsPanel}>
          {/* Stat: Views */}
          <div className={styles.statBlock}>
            <div className={styles.statLabelRow}>
              <FiEye className={styles.statIcon} />
              <span className={`${styles.statLabel} ${spaceMono.className}`}>GLOBAL_VIEWS</span>
            </div>
            <span className={`${styles.statNumber} ${barlow.className}`}>
              {FEATURED_ARTICLE.stats.views}
            </span>
          </div>

          <div className={styles.statsDivider}></div>

          {/* Stat: Impressions */}
          <div className={styles.statBlock}>
            <div className={styles.statLabelRow}>
              <FiBarChart2 className={styles.statIcon} />
              <span className={`${styles.statLabel} ${spaceMono.className}`}>SYSTEM_IMPRESSIONS</span>
            </div>
            <span className={`${styles.statNumber} ${barlow.className}`}>
              {FEATURED_ARTICLE.stats.impressions}
            </span>
          </div>

          <div className={styles.statsDivider}></div>

          {/* Stat: Read Time */}
          <div className={styles.statBlock}>
            <div className={styles.statLabelRow}>
              <FiClock className={styles.statIcon} />
              <span className={`${styles.statLabel} ${spaceMono.className}`}>READ_TIME_MIN</span>
            </div>
            <span className={`${styles.statNumber} ${barlow.className}`}>
              {FEATURED_ARTICLE.stats.readTime}
            </span>
          </div>

          {/* Bottom meta: publish date */}
          <div className={styles.statsMeta}>
            <span className={`${styles.statLabel} ${spaceMono.className}`}>PUBLISHED</span>
            <span className={`${styles.statsMetaValue} ${spaceMono.className}`}>
              {FEATURED_ARTICLE.publishDate}
            </span>
          </div>
        </div>

        {/* RIGHT — Article Content */}
        <div className={styles.contentPanel}>

          {/* Top section */}
          <div className={styles.topContent}>
            {/* Category Badge */}
            <div className={styles.badgeRow}>
              <div className={`${styles.badge} ${spaceMono.className}`}>
                {FEATURED_ARTICLE.category}
              </div>
            </div>

            {/* Title */}
            <h2 className={`${styles.title} ${barlow.className}`}>
              {FEATURED_ARTICLE.title}
            </h2>

            {/* Primary Excerpt */}
            <p className={`${styles.excerpt} ${inter.className}`}>
              {FEATURED_ARTICLE.excerpt}
            </p>

            {/* Secondary Excerpt */}
            <p className={`${styles.subExcerpt} ${inter.className}`}>
              {FEATURED_ARTICLE.subExcerpt}
            </p>

            {/* Tags */}
            <div className={styles.tagsRow}>
              {FEATURED_ARTICLE.tags.map((tag) => (
                <span key={tag} className={`${styles.tag} ${spaceMono.className}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom: divider + CTA */}
          <div className={styles.bottomRow}>
            <div className={styles.bottomDivider}></div>
            <div className={styles.bottomMeta}>
              <span className={`${styles.metaText} ${spaceMono.className}`}>
                HARSH GUPTA // PORTFOLIO_ENGINEERING // 2026
              </span>
              <a
                href={FEATURED_ARTICLE.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaLink}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{ color: ctaHovered ? '#ffffff' : '#aaaaaa' }}
              >
                <span className={`${styles.ctaText} ${spaceMono.className}`}>
                  {FEATURED_ARTICLE.ctaLabel}
                </span>
                <FiArrowUpRight className={styles.ctaArrow} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedBlog;
