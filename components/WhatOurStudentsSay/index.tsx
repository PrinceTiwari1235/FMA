"use client";
import React from 'react';

const testimonials = [
  {
    color: 'indigo-500',
    border: 'border-t-8 border-indigo-500',
    ring: 'ring-indigo-500',
    quoteBg: 'bg-indigo-500',
    quote: `I went from never touching a piano to performing at City Hall in just 8 months. The teachers here are magicians!`,
    name: 'Sophia R.',
    info: 'Age 16, Piano Student',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2024-08-12'
  },
  {
    color: 'purple-400',
    border: 'border-t-8 border-purple-400',
    ring: 'ring-purple-400',
    quoteBg: 'bg-purple-400',
    quote: `My daughter’s confidence soared after joining vocal classes. She now auditions for school plays without fear!`,
    name: 'Michael T.',
    info: 'Parent of Vocal Student',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2024-05-02'
  },
  {
    color: 'yellow-400',
    border: 'border-t-8 border-yellow-400',
    ring: 'ring-yellow-400',
    quoteBg: 'bg-yellow-400',
    quote: `The guitar instructors pushed me beyond my limits. I’m now gigging at local cafes and writing my own songs.`,
    name: 'Lena K.',
    info: 'Age 22, Guitar Student',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    date: '2024-02-14'
  },
];

export default function WhatOurStudentsSay(): React.ReactElement {
  const reviewsLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Student testimonials",
    "mainEntity": testimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "datePublished": t.date,
      "reviewBody": t.quote
    }))
  };

  return (
    <section aria-labelledby="testimonials-heading" className="w-full py-16 bg-linear-to-br from-indigo-50 via-white to-yellow-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }} />

      <div className="max-w-7xl mx-auto px-4">
        <h2 id="testimonials-heading" className="text-4xl font-extrabold text-slate-900 text-center mb-2">What Our Students Say</h2>
        <div className="text-center text-indigo-600 font-medium text-lg mb-8 flex flex-col items-center">
          <span>Real stories. Real results.</span>
          <span className="block w-32 h-1 bg-indigo-500 mt-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article key={i} className={`relative bg-white rounded-3xl shadow-xl p-8 pt-12 flex flex-col justify-between min-h-[280px] ${t.border}`} aria-labelledby={`testimonial-${i}-name`}>
              <div className="absolute left-1/2 -top-8 -translate-x-1/2 z-10">
                <span className={`inline-flex items-center justify-center w-16 h-16 rounded-full ring-4 ${t.ring} bg-white shadow-lg`}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" className={t.quoteBg} fill="currentColor" />
                    <text x="10" y="25" fontSize="22" fill="#fff" fontWeight="bold">“</text>
                  </svg>
                </span>
              </div>
              <blockquote className="italic text-lg text-gray-700 mb-6 mt-2" cite={t.name}>{t.quote}</blockquote>
              <div className="flex items-center gap-3 mt-4">
                <img src={t.avatar} alt={`${t.name} avatar`} className="w-12 h-12 rounded-full object-cover border-2 border-gray-200" />
                <div className="text-left">
                  <div id={`testimonial-${i}-name`} className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.info}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
