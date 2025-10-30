"use client";
import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#6366f1" fillOpacity="0.12"/><path d="M16 32V20a2 2 0 012-2h12a2 2 0 012 2v12" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="28" r="2" fill="#6366f1"/><rect x="18" y="22" width="12" height="2" rx="1" fill="#6366f1"/></svg>
    ),
    title: 'Expert Instructors',
    desc: 'All teachers hold advanced degrees and have 10+ years teaching experience.'
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#a78bfa" fillOpacity="0.12"/><rect x="14" y="20" width="20" height="12" rx="2" stroke="#a78bfa" strokeWidth="2"/><rect x="20" y="16" width="8" height="4" rx="2" fill="#a78bfa"/><rect x="18" y="28" width="12" height="2" rx="1" fill="#a78bfa"/></svg>
    ),
    title: 'Flexible Scheduling',
    desc: 'Morning, afternoon, evening — choose what fits your life.'
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#fbbf24" fillOpacity="0.12"/><path d="M24 32V20" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/><ellipse cx="24" cy="16" rx="4" ry="4" fill="#fbbf24"/></svg>
    ),
    title: 'Performance Opportunities',
    desc: 'Quarterly recitals, city-wide concerts, and recording studio sessions.'
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#6366f1" fillOpacity="0.12"/><path d="M16 32l8-8 8 8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 24h16" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Progress Tracking',
    desc: 'Monthly reports, video feedback, and milestone certificates.'
  }
];

export default function WhyChooseUs(): React.ReactElement {
  return (
    <section className="w-full py-16 bg-linear-to-br from-indigo-50 via-white to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-2">Why Choose Us?</h2>
        <div className="text-center text-indigo-600 font-medium text-lg mb-8 flex flex-col items-center">
          <span>Experience the DMA difference</span>
          <span className="block w-32 h-1 bg-indigo-500 mt-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 min-w-[260px] flex-1">
              {f.icon}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
