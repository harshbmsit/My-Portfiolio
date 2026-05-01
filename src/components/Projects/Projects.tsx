import React from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google';
import { FiExternalLink } from 'react-icons/fi';
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
    id: 'project-one',
    name: 'SHELLY',
    description: 'A custom automation suite designed to eliminate operational bottlenecks in high-growth studio environments.',
    image: '/images/project1.png',
    tags: ['PYTHON', 'FASTAPI', 'POSTGRESQL'],
    href: '/projects#project-one',
  },
  {
    id: 'project-two',
    name: 'AGENTIC AI',
    description: 'Developing LLM-based systems to interpret complex architectures and provide real-time optimization.',
    image: '/images/project2.png',
    tags: ['NEXT.JS', 'RAG', 'LANGCHAIN'],
    href: '/projects#project-two',
  },
  {
    id: 'project-three',
    name: 'BACKTEST ENGINE',
    description: 'Professional financial backtesting chart interface with candlestick graphs and technical indicators.',
    image: '/images/project3.png',
    tags: ['PYTHON', 'ML', 'BACKTESTING'],
    href: '/projects#project-three',
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
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
          <div key={project.id} className={styles.projectCard}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
