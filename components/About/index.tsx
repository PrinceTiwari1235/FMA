"use client";
import React, { useEffect, useRef, useState } from 'react';

const MusicIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 17a3 3 0 100-6 3 3 0 000 6z" fill="#6D28D9" />
    <path d="M9 8V3l8-1v6" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstructorIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" fill="#8B5CF6" />
    <path d="M4 20a8 8 0 0116 0" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7h-8" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MicrophoneIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 1v11" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="3" width="6" height="9" rx="3" fill="#F59E0B" />
    <path d="M19 11v1a7 7 0 01-14 0v-1" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FeatureCard({ Icon, title, children, visible, delay = 0 }: { Icon: any; title: string; children: React.ReactNode; visible: boolean; delay?: number }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionProperty: 'opacity, transform', transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(.2,.9,.2,1)', transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04))' }}>
        <Icon className="w-8 h-8 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  );
}

export default function About(): React.ReactElement {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || scrolledToTop) return;
    const el = ref.current as HTMLElement | null;
    if (!el || typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector('header');
    const headerOffset = header ? (header as HTMLElement).offsetHeight + 8 : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    if (prefersReduced) {
      window.scrollTo(0, top);
    } else {
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setScrolledToTop(true);
  }, [visible, scrolledToTop]);

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    "name": "Dynamic Music Academy",
    "url": "https://your-site.example",
    "logo": "https://your-site.example/logo.png",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "addressRegion": "",
      "postalCode": "",
      "addressCountry": ""
    }
  };

  return (
    <section id="about" ref={ref as any} aria-labelledby="about-heading" className="relative py-24 overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />

      {/* Decorative animated background blobs */}
      <div aria-hidden className="absolute -left-40 -top-20 w-96 h-96 rounded-full filter blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 30% 30%, #c7b3ff, transparent 40%)' }} />
      <div aria-hidden className="absolute right-[-10%] top-10 w-72 h-72 rounded-full filter blur-2xl opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, #fceabb, transparent 40%)' }} />
      <div aria-hidden className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10%] w-[60vw] max-w-4xl h-80 rounded-3xl filter blur-2xl opacity-20" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.06), rgba(99,102,241,0.02) 50%, rgba(245,158,11,0.03))' }} />

      <style>{`@keyframes float { 0% { transform: translateY(0);} 50% { transform: translateY(-8px);} 100% { transform: translateY(0);} }
        @keyframes spinSlow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 18s linear infinite; }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        <div className={`text-center mb-12 transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100">About Dynamic Music Academy</h2>

          <div className="mt-3 flex flex-col items-center">
            <p className="text-indigo-500 font-medium transition-colors duration-200">Where passion meets purpose</p>
            <div className="h-1 bg-indigo-500 rounded mt-3" style={{ width: visible ? '5rem' : 0, transition: 'width 200ms ease-out' }} />
          </div>

          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We believe every student is unique. Our approach blends tradition with innovation, ensuring every lesson
            is engaging, supportive, and tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full">
          <FeatureCard Icon={MusicIcon} title="Personalized Learning" visible={visible} delay={0}>
            Tailored lessons to match your pace, goals, and style.
          </FeatureCard>

          <FeatureCard Icon={InstructorIcon} title="Expert Instructors" visible={visible} delay={120}>
            Learn from Grammy-nominated and conservatory-trained mentors.
          </FeatureCard>

          <FeatureCard Icon={MicrophoneIcon} title="Stage Experience" visible={visible} delay={240}>
            Perform in real concerts, recitals, and community events.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
