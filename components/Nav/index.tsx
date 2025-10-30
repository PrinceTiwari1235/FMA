"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/events', label: 'Events & Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar(): React.ReactElement {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileOpen, setMobileOpen] = useState(false);

  // init theme (from localStorage or prefers-color-scheme)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('site-theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // persist and apply theme
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('site-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const isActive = (href: string) => (pathname ?? '/') === href;

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={`${styles.wrapper} ${theme === 'dark' ? styles.dark : ''}`}>
        <div className={styles.brand}>
          <div className={styles.logo} aria-hidden="true">
            {/* Microphone / music mark */}
            <svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#6b7cff"/>
                  <stop offset="1" stopColor="#8f63ff"/>
                </linearGradient>
              </defs>
              <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" fill="url(#g1)"/>
              <path d="M19 11v1a7 7 0 0 1-14 0v-1" stroke="#d6d1ff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19v2" stroke="#ffc500" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={styles.title}>Dynamic Music Academy</div>
        </div>

        <div className={styles.navCenter}>
          <ul className={styles.links}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <button
            aria-label="Toggle theme"
            className={styles.themeBtn}
            onClick={toggleTheme}
            title="Toggle light / dark"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 4v1.5M12 18.5V20M4 12h1.5M18.5 12H20M6.3 6.3l1.06 1.06M16.64 16.64l1.06 1.06M6.3 17.7l1.06-1.06M16.64 7.36l1.06-1.06" stroke="#2a2a2a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3.2" stroke="#2a2a2a" strokeWidth="1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#1f2937" opacity="0.95"/>
              </svg>
            )}
          </button>

          <button
            className={styles.mobileBtn}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M6 18L18 6" stroke="#222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <ul className={styles.mobileList}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.mobileLink} ${isActive(l.href) ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
