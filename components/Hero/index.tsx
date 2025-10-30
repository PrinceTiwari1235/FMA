"use client";
import React, { useEffect, useRef, useState } from 'react';

const slides = [
  'https://images.pexels.com/photos/34228389/pexels-photo-34228389.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  'https://images.pexels.com/photos/7521300/pexels-photo-7521300.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
];

export default function Hero(): React.ReactElement {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const aboutEl = document.getElementById('about');
    if (!aboutEl) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setAboutVisible(entry.isIntersecting));
      },
      { threshold: 0.12 }
    );
    obs.observe(aboutEl);
    return () => obs.disconnect();
  }, []);

  function animStyle(offsetY = 0, delay = 0) {
    if (!loaded) {
      return {
        opacity: 0,
        transform: `translateY(${ -18 + offsetY }px) scale(0.98)`,
        transition: `opacity 420ms ${delay}ms ease, transform 420ms ${delay}ms ease`,
      } as React.CSSProperties;
    }
    if (aboutVisible) {
      return {
        opacity: 0.36,
        transform: `translateY(${8 + offsetY}px) scale(0.96)`,
        transition: `opacity 420ms ${delay}ms ease, transform 420ms ${delay}ms ease`,
      } as React.CSSProperties;
    }
    return {
      opacity: 1,
      transform: `translateY(${offsetY}px) scale(1)`,
      transition: `opacity 420ms ${delay}ms ease, transform 420ms ${delay}ms ease`,
    } as React.CSSProperties;
  }

  function startAuto() {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function goTo(i: number) {
    setIndex(i % slides.length);
    startAuto();
  }

  return (
    <section aria-labelledby="hero-heading" className="relative w-full h-[92vh] overflow-hidden flex items-center justify-center" role="region">
      {/* Slides */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`slide-${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
              i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ))}
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 -z-5 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 text-center px-0 max-w-7xl w-full mx-auto">
        <h1 id="hero-heading" style={animStyle(-2, 40)} className="font-extrabold text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-tight mb-4 drop-shadow-md">
          <span className="text-white">Ignite Your </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-400 via-pink-400 to-indigo-500 drop-shadow-md">Musical Journey</span>
        </h1>
        <p style={animStyle(2, 90)} className="text-white/90 drop-shadow-sm text-lg md:text-xl max-w-4xl mx-auto mb-6">
          Join thousands of students who’ve discovered their passion at Dynamic Music Academy — where every note matters.
        </p>

        <div style={animStyle(6, 140)} className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#enroll" className="inline-block px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold shadow-lg transition transform hover:-translate-y-1">
            Enroll Now
          </a>
          <a href="#trial" className="inline-block px-6 py-3 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 transition transform hover:-translate-y-1">
            Book a Trial
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex items-center z-20">
        <div style={animStyle(10, 220)} className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-transform duration-150 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                i === index ? 'bg-slate-900 dark:bg-white' : 'bg-white/60 dark:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
