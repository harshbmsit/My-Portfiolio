"use client";

import React from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['800'],
  style: ['normal', 'italic'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const PROJECTS = [
  {
    id: 'project-verisafe',
    name: 'VERISAFE',
    description: 'A platform to secure digital assets and verify physical items via NFC syncing and smart scanning. It provides a robust vault for high-value items, ensuring authenticity through tamper-proof NFC tags and real-time verification protocols.',
    image: '/images/verisafe.png',
    tags: ['NEXT.JS', 'SECURITY', 'NFC'],
    href: 'https://veri-safe-mu.vercel.app/',
  },
  {
    id: 'project-nexus',
    name: 'NEXUS',
    description: 'An MCP-based server system that connects GitHub, Jira, Slack, and Google Calendar. It centralizes project updates and notifications, eliminating context switching and keeping teams synchronized across multiple platforms effortlessly.',
    image: '/images/nexus_v2.png',
    tags: ['MCP', 'INTEGRATIONS', 'AUTOMATION'],
    href: 'https://nexus-production-103d.up.railway.app',
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className={styles.projectsSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Title Row */}
      <div className={styles.titleRow}>
        <div className={`${styles.titleBlock} ${barlow.className}`}>
          <h2 className={styles.titleVenture}>VENTURE</h2>
          <h2 className={styles.titleShowcase}>SHOWCASE</h2>
        </div>
        <div className={styles.redLine}></div>
      </div>

      {/* Grid */}
      <div className={styles.projectsGrid}>
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            {/* Image Area */}
            <div className={styles.imageArea}>
              <Image 
                src={project.image} 
                alt={project.name}
                fill
                className={styles.projectImage}
              />
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <div className={styles.nameRow}>
                <h3 className={`${styles.projectName} ${barlow.className}`}>
                  {project.name}
                </h3>
                <FiExternalLink className={styles.linkIcon} />
              </div>

              <p className={`${styles.description} ${inter.className}`}>
                {project.description}
              </p>

              <div className={styles.techTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={`${styles.tag} ${spaceMono.className}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
