"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Space_Mono, Barlow_Condensed } from 'next/font/google';
import styles from './MiniGame.module.css';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700', '900'], style: ['normal', 'italic'] });

const KEYWORDS = [
  "PAYLOAD", "EXPLOIT", "KERNEL", "PROXY", "FIREWALL", 
  "ENCRYPTION", "OVERRIDE", "PROTOCOL", "BREACH", "SYSTEM", 
  "MALWARE", "TROJAN", "ROOTKIT", "BOTNET", "PHISHING", 
  "BACKDOOR", "SPYWARE", "CIPHER", "INTRUSION", "DATALINK",
  "DECRYPT", "VULNERABILITY", "SANDBOX", "DEBUGGER", "HASHING",
  "FIRMWARE", "SEGMENT", "BANDWIDTH", "MAINFRAME", "TERMINAL"
];

interface Word {
  id: number;
  text: string;
  typed: string;
  x: number;
  duration: number;
}

const MiniGame: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [words, setWords] = useState<Word[]>([]);
  const [personalBests, setPersonalBests] = useState<Record<number, number>>({ 1: 0, 1.5: 0, 2: 0 });
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  
  useEffect(() => {
    const savedPBs = localStorage.getItem('cyber-breach-pbs');
    if (savedPBs) {
      try {
        setPersonalBests(JSON.parse(savedPBs));
      } catch (e) {
        console.error("Failed to parse PBs", e);
      }
    }
  }, []);

  useEffect(() => {
    if (score > (personalBests[speedMultiplier] || 0)) {
      const newPBs = { ...personalBests, [speedMultiplier]: score };
      setPersonalBests(newPBs);
      localStorage.setItem('cyber-breach-pbs', JSON.stringify(newPBs));
    }
  }, [score, personalBests, speedMultiplier]);

  const stateRef = useRef({ isPlaying, isGameOver, score, words });
  useEffect(() => {
    stateRef.current = { isPlaying, isGameOver, score, words };
  }, [isPlaying, isGameOver, score, words]);

  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setLives(3);
    setWords([]);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const endGame = useCallback(() => {
    setIsPlaying(false);
    setIsGameOver(true);
    setWords([]);
    inputRef.current?.blur();
  }, []);

  const handleMiss = useCallback((id: number) => {
    setWords(prev => prev.filter(w => w.id !== id));
    setLives(prev => {
      if (prev <= 1) {
        endGame();
        return 0;
      }
      return prev - 1;
    });
  }, [endGame]);

  // Spawner loop
  useEffect(() => {
    if (!isPlaying || isGameOver) return;
    
    // Adjusted base rate by speed multiplier
    const spawnRate = Math.max(800, (2500 - score * 60) / speedMultiplier);
    
    const interval = setInterval(() => {
      setWords(prev => {
        const currentCount = prev.length;
        
        // Difficulty thresholds
        let maxWords = 2;
        let spawnCount = 1;
        
        if (score >= 20) {
          maxWords = 4;
          spawnCount = Math.floor(Math.random() * 2) + 2; // 2 to 3
        } else if (currentCount >= maxWords) {
          return prev;
        }

        const newWords: Word[] = [];
        for (let i = 0; i < spawnCount; i++) {
          if (prev.length + newWords.length >= maxWords) break;
          
          const text = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
          const x = Math.random() * 70 + 5; 
          const duration = Math.max(2500, (8000 - score * 150) / speedMultiplier); 
          newWords.push({ id: Date.now() + i, text, typed: "", x, duration });
        }
        
        return [...prev, ...newWords];
      });
    }, spawnRate);
    
    return () => clearInterval(interval);
  }, [isPlaying, isGameOver, score, speedMultiplier]);

  const processKey = useCallback((keyInput: string) => {
    const { isPlaying, isGameOver } = stateRef.current;
    if (!isPlaying || isGameOver) return;
    
    const key = keyInput.toUpperCase();
    if (!/^[A-Z]$/.test(key)) return;
    
    setWords(currentWords => {
      const targetedWord = currentWords.find(w => w.typed.length > 0);
      
      if (targetedWord) {
        const nextChar = targetedWord.text[targetedWord.typed.length];
        if (key === nextChar) {
          const newTyped = targetedWord.typed + key;
          if (newTyped === targetedWord.text) {
            setScore(s => s + 1);
            return currentWords.filter(w => w.id !== targetedWord.id);
          } else {
            return currentWords.map(w => w.id === targetedWord.id ? { ...w, typed: newTyped } : w);
          }
        }
        return currentWords;
      } else {
        const matchingWords = currentWords.filter(w => w.text.startsWith(key));
        if (matchingWords.length > 0) {
          const target = matchingWords.reduce((oldest, current) => current.id < oldest.id ? current : oldest);
          return currentWords.map(w => w.id === target.id ? { ...w, typed: key } : w);
        }
        return currentWords;
      }
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.key.length > 1) return;
      if (e.key === 'Unidentified') return;
      processKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [processKey]); 

  const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length > 0) {
      processKey(val[val.length - 1]);
    }
  };

  const handleContainerClick = () => {
    if (isPlaying) {
      inputRef.current?.focus();
    }
  };

  const toggleSpeed = () => {
    setSpeedMultiplier(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1);
  };

  return (
    <section className={styles.gameSection}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={`${styles.title} ${barlow.className}`}>
            CYBER BREACH
          </h2>
          <div className={`${styles.scoreboard} ${spaceMono.className}`}>
            <span>PB:&nbsp;{personalBests[speedMultiplier] || 0}</span>
          </div>
        </div>
        <div className={`${styles.stats} ${spaceMono.className}`}>
          <div className={styles.speedToggle} onClick={toggleSpeed}>
            SPEED:&nbsp;x{speedMultiplier}
          </div>
          <span>DECRYPTED:&nbsp;{score.toString().padStart(3, '0')}</span>
          <span className={styles.lives}>INTEGRITY:&nbsp;{'█'.repeat(lives)}{'▒'.repeat(3 - lives)}</span>
        </div>
      </div>

      <div className={styles.gameContainer} onClick={handleContainerClick}>
        
        <input 
          ref={inputRef}
          type="text" 
          className={styles.hiddenInput} 
          value="" 
          onChange={handleMobileInput}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {!isPlaying && !isGameOver && (
          <div className={styles.overlay}>
            <p className={`${styles.instructions} ${spaceMono.className}`}>
              WARNING: INCOMING THREATS DETECTED.<br/>
              TYPE THE ENCRYPTION KEYS TO NEUTRALIZE.<br/>
              DO NOT LET THEM BREACH THE FIREWALL.
            </p>
            <button 
              type="button"
              className={`${styles.startBtn} ${barlow.className}`} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startGame();
              }}
            >
              INITIATE FIREWALL
            </button>
          </div>
        )}

        {isGameOver && (
          <div className={styles.overlay}>
            <h3 className={`${styles.gameOverTitle} ${barlow.className}`}>
              SYSTEM COMPROMISED
            </h3>
            <div className={`${styles.finalStats} ${spaceMono.className}`}>
              <p>THREATS NEUTRALIZED: {score}</p>
              <p>PB (x{speedMultiplier}): {personalBests[speedMultiplier] || 0}</p>
            </div>
            <button 
              type="button"
              className={`${styles.startBtn} ${barlow.className}`} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startGame();
              }}
            >
              REBOOT SYSTEM
            </button>
          </div>
        )}

        {isPlaying && words.map(word => (
          <div
            key={word.id}
            className={`${styles.fallingWord} ${spaceMono.className}`}
            style={{
              left: `${word.x}%`,
              animationDuration: `${word.duration}ms`,
            }}
            onAnimationEnd={() => handleMiss(word.id)}
          >
            <span className={styles.typedText}>{word.typed}</span>
            <span className={styles.untypedText}>{word.text.slice(word.typed.length)}</span>
          </div>
        ))}
        
        <div className={styles.scanline}></div>
      </div>
    </section>
  );
};

export default MiniGame;
