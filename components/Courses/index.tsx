"use client";
import React, { useEffect, useRef, useState } from 'react';

const courses = [
	{
		id: 1,
		title: 'Piano Mastery (Beginner to Advanced)',
		weeks: '12 Weeks',
		level: 'All Levels',
		price: '$299',
		schedule: 'Mon/Wed/Fri',
		img: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1600',
		accent: 'from-indigo-400 to-indigo-600',
		cta: 'Enroll Now',
	},
	{
		id: 2,
		title: 'Rock Guitar (All Styles)',
		weeks: '10 Weeks',
		level: 'All Levels',
		price: '$249',
		schedule: 'Tue/Thu',
		img: 'https://images.pexels.com/photos/164836/pexels-photo-164836.jpeg?auto=compress&cs=tinysrgb&w=1600',
		accent: 'from-purple-400 to-purple-600',
		cta: 'Enroll Now',
	},
	{
		id: 3,
		title: 'Vocal Training (Performance)',
		weeks: '8 Weeks',
		level: 'All Levels',
		price: '$199',
		schedule: 'Sat/Sun',
		img: 'https://images.pexels.com/photos/3771112/pexels-photo-3771112.jpeg?auto=compress&cs=tinysrgb&w=1600',
		accent: 'from-yellow-400 to-yellow-500',
		cta: 'Enroll Now',
	},
];

function IconClock({ className = 'w-4 h-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
			<path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	);
}
function IconLevel({ className = 'w-4 h-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
			<path d="M12 3l9 4.5v6.75A9 9 0 1112 3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
function IconDollar({ className = 'w-4 h-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
			<path d="M12 1v22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M17 5H9.5a3.5 3.5 0 100 7H14a3.5 3.5 0 110 7H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
function IconCalendar({ className = 'w-4 h-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
			<rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
			<path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	);
}

function CourseCard({ course, visible = true, delay = 0 }: { course: any; visible?: boolean; delay?: number }) {
	const isYellow = course.accent?.includes('yellow');
	const isPurple = course.accent?.includes('purple');
	const isIndigo = course.accent?.includes('indigo');
	let gradientStyle = 'linear-gradient(90deg,#6366f1,#4f46e5)';
	let textColor = '#ffffff';
	if (isYellow) {
		gradientStyle = 'linear-gradient(90deg,#f59e0b,#fbbf24)';
		textColor = '#0f172a';
	} else if (isPurple) {
		gradientStyle = 'linear-gradient(90deg,#7c3aed,#8b5cf6)';
		textColor = '#ffffff';
	} else if (isIndigo) {
		gradientStyle = 'linear-gradient(90deg,#6366f1,#4f46e5)';
		textColor = '#ffffff';
	}

	const animStyle = visible
		? { opacity: 1, transform: 'translateY(0)', transition: `opacity 520ms ${delay}ms ease, transform 520ms ${delay}ms ease` }
		: { opacity: 0, transform: 'translateY(18px)', transition: `opacity 520ms ${delay}ms ease, transform 520ms ${delay}ms ease` };

	return (
		<article style={animStyle} className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
			<div className="relative w-full overflow-hidden">
				<img src={course.img} alt={course.title} className="w-full h-44 sm:h-48 md:h-56 object-cover rounded-t-2xl" />
				<div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white`} style={{
					background: course.accent.includes('yellow') ? 'linear-gradient(90deg,#f59e0b,#fbbf24)' : 'linear-gradient(90deg,#7c3aed,#8b5cf6)'
				}}>
					{course.title.split(' ')[0]}
				</div>
			</div>

			<div className="p-5 sm:p-6 flex flex-col pb-12 md:pb-6">
				<h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{course.title}</h3>

				<div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mb-3">
					<div className="flex items-center gap-2">
						<IconClock className="w-4 h-4 text-indigo-500" />
						<span className="text-xs sm:text-sm">{course.weeks}</span>
					</div>

					<div className="flex items-center gap-2">
						<IconLevel className="w-4 h-4 text-indigo-400" />
						<span className="text-xs sm:text-sm">{course.level}</span>
					</div>

					<div className="flex items-center gap-2">
						<IconDollar className="w-4 h-4 text-amber-500" />
						<span className="text-xs sm:text-sm">{course.price}</span>
					</div>

					<div className="flex items-center gap-2 ml-auto">
						<IconCalendar className="w-4 h-4 text-indigo-400" />
						<span className="text-xs sm:text-sm">{course.schedule}</span>
					</div>
				</div>

				<p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-1">Master classical technique, improvisation, and performance skills with
					our conservatory-trained instructors. You’ll learn theory, ear training,
					and get personalized feedback every step.
				</p>

				<div className="mt-4 flex items-center justify-end md:absolute md:bottom-6 md:right-6 md:mt-0">
					<button aria-label={`${course.title} - ${course.cta}`} className="px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-1 focus:outline-none z-20" style={{ background: gradientStyle, color: textColor, minWidth: 120 }}>
						{course.cta}
					</button>
				</div>
			</div>
		</article>
	);
}

export default function Courses(): React.ReactElement {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);
	const [scrolledToTop, setScrolledToTop] = useState(false);

	const coursesLd = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"itemListElement": courses.map((c, i) => ({
			"@type": "ListItem",
			"position": i + 1,
			"item": {
				"@type": "Course",
				"name": c.title,
				"description": "Music course at Dynamic Music Academy",
				"provider": {
					"@type": "EducationalOrganization",
					"name": "Dynamic Music Academy",
					"sameAs": "https://your-site.example"
				}
			}
		}))
	};

	useEffect(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => setVisible(entry.isIntersecting));
			},
			{ threshold: 0.18 }
		);
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, []);

	useEffect(() => {
		if (!visible || scrolledToTop) return;
		if (typeof window === 'undefined') return;
		const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const header = document.querySelector('header');
		const headerOffset = header ? (header as HTMLElement).offsetHeight + 8 : 0;
		const top = (ref.current as HTMLElement).getBoundingClientRect().top + window.pageYOffset - headerOffset;
		if (prefersReduced) window.scrollTo(0, top);
		else window.scrollTo({ top, behavior: 'smooth' });
		setScrolledToTop(true);
	}, [visible, scrolledToTop]);

	return (
		<section id="courses" ref={ref as any} aria-labelledby="courses-heading" className="py-20 bg-linear-to-b from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-900">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesLd) }} />
			<div className="max-w-7xl mx-auto px-4 lg:px-8">
				<div className="text-center mb-12">
					<h2 id="courses-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
						Featured Courses
					</h2>
					<p className="mt-3 text-indigo-500">Learn, play, and grow with our most popular classes</p>
					<div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{courses.map((c, i) => (
						<CourseCard key={c.id} course={c} visible={visible} delay={i * 120} />
					))}
				</div>
			</div>
		</section>
	);
}
