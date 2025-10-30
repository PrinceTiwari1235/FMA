"use client";
import React from "react";

const events = [
	{
		id: 1,
		accent: "from-indigo-400 to-indigo-600",
		title: "Spring Recital",
		datetime: "April 12, 2025 • 6:00 PM",
		desc: "Featuring piano, violin, and vocal performances by our top students.",
		cta: "View Details",
		color: "#6366f1",
	},
	{
		id: 2,
		accent: "from-purple-400 to-purple-600",
		title: "Rock Workshop",
		datetime: "May 3, 2025 • 2:00 PM",
		desc: "Learn power chords, stage presence, and band dynamics with guest artists.",
		cta: "Register Now",
		color: "#a78bfa",
	},
	{
		id: 3,
		accent: "from-yellow-400 to-yellow-500",
		title: "Open Mic Night",
		datetime: "June 20, 2025 • 7:00 PM",
		desc: "All students welcome! Bring your instrument or just your voice.",
		cta: "Sign Up",
		color: "#f59e0b",
	},
];

function IconCalendar() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<rect
				x="3"
				y="4"
				width="18"
				height="16"
				rx="2"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M16 2v4M8 2v4"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
function IconGuitar() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M14 3l7 7-4 4-7-7"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M8 9l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	);
}
function IconMic() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<rect
				x="9"
				y="3"
				width="6"
				height="11"
				rx="3"
				fill="currentColor"
			/>
			<path
				d="M19 11v1a7 7 0 11-14 0v-1"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export default function UpcomingEvents(): React.ReactElement {
	const eventsLd = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: events.map((e, i) => ({
			"@type": "ListItem",
			position: i + 1,
			item: {
				"@type": "Event",
				name: e.title,
				startDate:
					e.id === 1
						? "2025-04-12T18:00:00"
						: e.id === 2
						? "2025-05-03T14:00:00"
						: "2025-06-20T19:00:00",
				description: e.desc,
				location: {
					"@type": "Place",
					name: "Dynamic Music Academy",
				},
				offers: {
					"@type": "Offer",
					url: "https://your-site.example/events",
					availability: "https://schema.org/InStock",
				},
			},
		})),
	};

	return (
		<section
			aria-labelledby="upcoming-events-heading"
			className="w-full py-16 bg-linear-to-br from-indigo-50 via-white to-yellow-50"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsLd) }}
			/>

			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-10">
					<h2
						id="upcoming-events-heading"
						className="text-4xl font-extrabold text-slate-900"
					>
						Upcoming Events
					</h2>
					<p className="text-indigo-600 mt-2">
						Mark your calendar and join the fun
					</p>
					<div className="mx-auto mt-4 h-1 w-24 bg-indigo-500 rounded" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{events.map((e) => (
						<article
							key={e.id}
							className="relative bg-white rounded-2xl shadow-xl p-8 pt-12 min-h-60"
							aria-labelledby={`event-${e.id}-title`}
						>
							{/* top accent bar */}
							<div
								className="absolute left-6 right-6 -top-6 h-3 rounded-t-2xl"
								style={{
									background: `linear-gradient(90deg, ${e.color}, ${e.color})`,
								}}
							/>

							{/* floating icon */}
							<div className="absolute left-1/2 -top-8 -translate-x-1/2">
								<div
									className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
									style={{
										border: `6px solid rgba(255,255,255,1)`,
									}}
								>
									<span
										className="w-10 h-10 rounded-full flex items-center justify-center"
										style={{
											background: `linear-gradient(90deg, ${e.color}, rgba(99,102,241,0.9))`,
											color: "#fff",
										}}
									>
										{e.id === 1 ? (
											<IconCalendar />
										) : e.id === 2 ? (
											<IconGuitar />
										) : (
											<IconMic />
										)}
									</span>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-r from-indigo-100 to-indigo-300 text-white shadow-md">
									{/* small left icon */}
									{e.id === 1 ? (
										<IconCalendar />
									) : e.id === 2 ? (
										<IconGuitar />
									) : (
										<IconMic />
									)}
								</div>
								<div className="flex-1">
									<h3
										id={`event-${e.id}-title`}
										className="text-xl font-semibold text-slate-900 mb-1"
									>
										{e.title}
									</h3>
									<time
										className="text-sm text-slate-500 mb-4"
										dateTime={
											e.id === 1
												? "2025-04-12T18:00:00"
												: e.id === 2
												? "2025-05-03T14:00:00"
												: "2025-06-20T19:00:00"
										}
									>
										{e.datetime}
									</time>
									<p className="text-slate-600 mb-6">{e.desc}</p>
								</div>
							</div>

							<div className="mt-2">
								<button
									className="px-4 py-2 rounded-full font-semibold shadow"
									style={{
										background:
											e.id === 3
												? "#f59e0b"
												: e.id === 2
												? "#a78bfa"
												: "#6366f1",
										color:
											e.id === 3 ? "#0f172a" : "#fff",
									}}
								>
									{e.cta}
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
