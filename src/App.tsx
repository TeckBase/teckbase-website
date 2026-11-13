import {
	RiArrowDownSLine,
	RiArrowRightLine,
	RiBarChartBoxLine,
	RiBellLine,
	RiDoubleQuotesL,
	RiFileTextLine,
	RiFlashlightLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiMailLine,
	RiPhoneLine,
	RiPlugLine,
	RiShieldCheckLine,
	RiTaskLine,
	RiTeamLine,
	RiTwitterXLine,
	RiYoutubeLine,
} from "@remixicon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

// Placeholder image helper
const ph = (w: number, h: number, seed = 1) =>
	`https://picsum.photos/seed/${seed}/${w}/${h}`;

// Integration icons using emoji for speed (no extra deps)
const INTEGRATIONS_ROW1 = [
	{ label: "Slack", icon: "💬" },
	{ label: "Notion", icon: "📝" },
	{ label: "Trello", icon: "🗂️" },
	{ label: "PayPal", icon: "💳" },
	{ label: "Drive", icon: "☁️" },
	{ label: "Ads", icon: "📢" },
	{ label: "Sheets", icon: "📊" },
	{ label: "Zapier", icon: "⚡" },
	{ label: "Slack", icon: "💬" },
	{ label: "Notion", icon: "📝" },
	{ label: "Trello", icon: "🗂️" },
	{ label: "PayPal", icon: "💳" },
];
const INTEGRATIONS_ROW2 = [
	{ label: "Figma", icon: "🎨" },
	{ label: "Hubspot", icon: "🔶" },
	{ label: "Zendesk", icon: "🎧" },
	{ label: "Asana", icon: "🌀" },
	{ label: "Shopify", icon: "🛒" },
	{ label: "Stripe", icon: "💜" },
	{ label: "Figma", icon: "🎨" },
	{ label: "Hubspot", icon: "🔶" },
	{ label: "Zendesk", icon: "🎧" },
	{ label: "Asana", icon: "🌀" },
	{ label: "Shopify", icon: "🛒" },
	{ label: "Stripe", icon: "💜" },
];

const CHART_BARS = [30, 55, 70, 50, 85, 60, 90, 75];

export default function App() {
	const heroTitleRef = useRef<HTMLDivElement>(null);
	const heroSubRef = useRef<HTMLParagraphElement>(null);
	const heroCtaRef = useRef<HTMLDivElement>(null);
	const heroAvatsRef = useRef<HTMLDivElement>(null);
	const partnersRef = useRef<HTMLDivElement>(null);
	const featureCardsRef = useRef<HTMLDivElement>(null);
	const integrationsRef = useRef<HTMLDivElement>(null);
	const testimonialRef = useRef<HTMLDivElement>(null);
	const statsRef = useRef<HTMLDivElement>(null);
	const ctaBannerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Hero entrance
			gsap.from(heroTitleRef.current, {
				opacity: 0,
				y: 40,
				duration: 0.9,
				ease: "power3.out",
			});
			gsap.from(heroSubRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8,
				ease: "power3.out",
				delay: 0.2,
			});
			gsap.from(heroCtaRef.current, {
				opacity: 0,
				y: 20,
				duration: 0.7,
				ease: "power3.out",
				delay: 0.4,
			});
			if (heroAvatsRef.current) {
				gsap.from(heroAvatsRef.current.querySelectorAll(".hero__avatar"), {
					opacity: 0,
					scale: 0.5,
					duration: 0.6,
					stagger: 0.12,
					ease: "back.out(1.7)",
					delay: 0.6,
				});
			}

			// Partners fade in
			gsap.from(partnersRef.current, {
				opacity: 0,
				y: 20,
				duration: 0.7,
				ease: "power2.out",
				scrollTrigger: { trigger: partnersRef.current, start: "top 90%" },
			});

			// Feature cards stagger
			if (featureCardsRef.current) {
				gsap.from(featureCardsRef.current.querySelectorAll(".feature-card"), {
					opacity: 0,
					y: 50,
					duration: 0.7,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: featureCardsRef.current,
						start: "top 80%",
					},
				});
			}

			// Integrations
			gsap.from(integrationsRef.current, {
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: { trigger: integrationsRef.current, start: "top 85%" },
			});

			// Testimonial
			gsap.from(testimonialRef.current, {
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: { trigger: testimonialRef.current, start: "top 85%" },
			});

			// Stats count-up feel
			if (statsRef.current) {
				gsap.from(statsRef.current.querySelectorAll(".stat__number"), {
					opacity: 0,
					y: 30,
					duration: 0.6,
					stagger: 0.15,
					ease: "power2.out",
					scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
				});
			}

			// CTA banner
			gsap.from(ctaBannerRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.7,
				ease: "power2.out",
				scrollTrigger: { trigger: ctaBannerRef.current, start: "top 90%" },
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<>
			{/* ── NAVBAR ───────────────────────────────────── */}
			<nav className="navbar">
				<div className="navbar__inner">
					<a href="#" className="navbar__logo">
						<span className="navbar__logo-icon">
							<RiShieldCheckLine size={16} />
						</span>
						Clause
					</a>
					<ul className="navbar__nav">
						<li>
							<a href="#">
								Solutions <RiArrowDownSLine size={15} />
							</a>
						</li>
						<li>
							<a href="#">
								Customers <RiArrowDownSLine size={15} />
							</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
					</ul>
					<div className="navbar__actions">
						<a href="#" className="navbar__login">
							Log In
						</a>
						<button className="btn-primary">Start Now</button>
					</div>
				</div>
			</nav>

			{/* ── HERO ─────────────────────────────────────── */}
			<section className="hero">
				{/* Floating avatars */}
				<div className="hero__avatars" ref={heroAvatsRef}>
					<div className="hero__avatar hero__avatar--tl">
						<img src={ph(52, 52, 10)} alt="User" />
					</div>
					<div className="hero__avatar hero__avatar--tr">
						<img src={ph(52, 52, 20)} alt="User" />
					</div>
					<div className="hero__avatar hero__avatar--bl">
						<img src={ph(52, 52, 30)} alt="User" />
					</div>
					<span className="hero__arrow hero__arrow--tl" aria-hidden="true">
						&#9654;
					</span>
					<span className="hero__arrow hero__arrow--tr" aria-hidden="true">
						&#9654;
					</span>
				</div>

				<div className="hero__badge">
					<span className="hero__badge-dot" />
					<RiFlashlightLine size={12} />
					Create for fast
				</div>

				<h1 className="hero__title" ref={heroTitleRef}>
					One tool to <span className="underline">manage</span>
					<br />
					contracts and your team
				</h1>

				<p className="hero__sub" ref={heroSubRef}>
					Clause helps legal teams work faster, smarter and more efficiently,
					delivering the visibility and data-driven insights to mitigate risk
					and ensure compliance.
				</p>

				<div className="hero__cta" ref={heroCtaRef}>
					<button className="btn-primary">Start for Free</button>
					<button className="btn-outline">Get a Demo</button>
				</div>
			</section>

			{/* ── PARTNERS ─────────────────────────────────── */}
			<div className="partners" ref={partnersRef}>
				<div className="partners__inner">
					<span className="partners__label">
						More than 100+ companies partner
					</span>
					<div className="partners__logos">
						{["HubSpot", "Dropbox", "Square", "Intercom", "Grammarly"].map(
							(name) => (
								<span key={name} className="partner-logo">
									<RiTeamLine size={16} /> {name}
								</span>
							),
						)}
					</div>
				</div>
			</div>

			{/* ── FEATURES ─────────────────────────────────── */}
			<section className="features">
				<div className="container text-center">
					<div className="section-label">
						<RiFileTextLine size={13} /> Features
					</div>
					<h2 className="section-title">
						Latest advanced technologies to ensure everything you needs
					</h2>
					<p className="section-sub">
						Maximize your team's productivity and security with our affordable,
						user-friendly contract management system.
					</p>
				</div>

				<div className="features__grid container" ref={featureCardsRef}>
					{/* Card 1 – Dynamic Dashboard */}
					<div className="feature-card feature-card--wide min-h-[280px]">
						<div className="feature-card__title">
							<RiBarChartBoxLine
								size={20}
								className="icon-inline"
							/>
							Dynamic dashboard
						</div>
						<p className="feature-card__desc">
							Clause helps legal teams work faster, smarter and more
							efficiently, delivering the visibility and data-driven insights to
							mitigate risk and ensure compliance.
						</p>
						<a href="#" className="feature-card__btn">
							Explore all <RiArrowRightLine size={14} />
						</a>

						{/* Mini dashboard mockup */}
						<div className="dashboard-mockup">
							<div className="dashboard-mockup__header">
								<span className="dashboard-mockup__title">
									Acme Inc. <RiArrowDownSLine size={14} />
								</span>
								<div className="dashboard-mockup__avatars">
									{[1, 2, 3, 4].map((i) => (
										<div key={i} className="dashboard-mockup__avatar">
											<img src={ph(24, 24, i * 5)} alt="" />
										</div>
									))}
								</div>
							</div>
							<div className="chart-bars">
								{CHART_BARS.map((h, i) => (
									<div
										key={i}
										className={`chart-bar${i === 6 ? " chart-bar--active" : ""}`}
										style={{ height: `${h}%` }}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Card 2 – Smart Notifications */}
					<div className="feature-card">
						<div className="feature-card__title">
							<RiBellLine
								size={20}
								className="icon-inline"
							/>
							Smart notifications
						</div>
						<p className="feature-card__desc">
							Easily accessible from the notifications center, calendar or email
							with the relevant activities.
						</p>

						<div className="notif-mockup">
							<div className="notif-row notif-row--header">
								<span>Email notification</span>
								<span className="notif-row__action">Save</span>
							</div>
							{[
								{ label: "New messages, comment, or replies", on: true },
								{ label: "Social emails", on: false },
								{ label: "Announcement and Update", on: true },
								{ label: "Reminders", on: false },
							].map((row) => (
								<div key={row.label} className="notif-row">
									<span>{row.label}</span>
									<div className={`toggle${row.on ? " toggle--on" : ""}`} />
								</div>
							))}
						</div>
					</div>

					{/* Card 3 – Task Management */}
					<div className="feature-card">
						<div className="feature-card__title">
							<RiTaskLine
								size={20}
								className="icon-inline"
							/>
							Task management
						</div>
						<p className="feature-card__desc">
							Discuss contract queries, manage tasks, secure approvals, track
							progress in the workspace.
						</p>

						<div className="task-mockup">
							<div className="task-header">
								<span>Activity</span>
								<span className="task-header__action">+ Message</span>
							</div>
							<div className="task-message">
								<div className="task-avatar">
									<img src={ph(28, 28, 7)} alt="Bill" />
								</div>
								<div>
									<strong className="task-message__name">Bill Sanders</strong>
									<br />
									Hello <strong>@Hugo Dilan</strong>. Could you sign the
									contract before the March 12? Thank you in advance 🙏
								</div>
							</div>
							<div className="task-message">
								<div className="task-avatar">
									<img src={ph(28, 28, 8)} alt="Jane" />
								</div>
								<div>
									<strong className="task-message__name">Jane Cooper</strong>
									<br />
									<span className="task-message__meta">
										Uploaded new contract
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── INTEGRATIONS ─────────────────────────────── */}
			<section className="integrations" ref={integrationsRef}>
				<div className="container text-center">
					<div className="section-label">
						<RiPlugLine size={13} /> Integrations
					</div>
					<h2 className="section-title">Don't replace. Integrate.</h2>
					<p className="section-sub">
						We understand the hustle of replacing the long-used tools in your
						process. That's why we integrate tools you use in your day-to-day
						work.
					</p>
					<div className="integrations__link-wrap">
						<a href="#" className="integrations__link">
							All Integrations <RiArrowRightLine size={14} />
						</a>
					</div>
				</div>

				<div className="integrations__track-wrapper">
					<div className="integrations__track">
						{[...INTEGRATIONS_ROW1, ...INTEGRATIONS_ROW1].map((item, i) => (
							<div key={i} className="integration-chip" title={item.label}>
								{item.icon}
							</div>
						))}
					</div>
					<div className="integrations__track integrations__track--reverse">
						{[...INTEGRATIONS_ROW2, ...INTEGRATIONS_ROW2].map((item, i) => (
							<div key={i} className="integration-chip" title={item.label}>
								{item.icon}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── TESTIMONIAL ──────────────────────────────── */}
			<section className="testimonial" ref={testimonialRef}>
				<div className="testimonial__quote-icon">
					<RiDoubleQuotesL />
				</div>
				<p className="testimonial__text">
					"Clause is helping our company to decrease operational expenses and
					turnaround time, while increasing the compliance, resource allocation
					and effectiveness of our contract management."
				</p>
				<div className="testimonial__author">
					<div className="testimonial__avatar">
						<img src={ph(44, 44, 42)} alt="Dariane Robertson" />
					</div>
					<div className="testimonial__meta">
						<div className="testimonial__name">Dariane Robertson</div>
						<div className="testimonial__role">
							Head of Strategy at Mailchimp
						</div>
					</div>
				</div>
			</section>

			{/* ── STATS ────────────────────────────────────── */}
			<div className="stats" ref={statsRef}>
				<div className="stats__grid">
					<div>
						<div className="stat__number">2021</div>
						<div className="stat__label">Clause Founded</div>
					</div>
					<div>
						<div className="stat__number">50K+</div>
						<div className="stat__label">Active Users</div>
					</div>
					<div>
						<div className="stat__number">1k+</div>
						<div className="stat__label">Company Partners</div>
					</div>
				</div>
			</div>

			{/* ── CTA BANNER ───────────────────────────────── */}
			<section className="cta-banner" ref={ctaBannerRef}>
				<div className="cta-banner__inner">
					<h2 className="cta-banner__title">
						Discover the full scale of <span>Clause</span> capabilities
					</h2>
					<div className="cta-banner__actions">
						<button className="btn-outline">Get a Demo</button>
						<button className="btn-primary">Start for Free</button>
					</div>
				</div>
			</section>

			{/* ── FOOTER ───────────────────────────────────── */}
			<footer className="footer">
				<div className="footer__top">
					<div>
						<div className="footer__brand-logo">
							<span className="footer__brand-icon">
								<RiShieldCheckLine size={14} />
							</span>
							Clause
						</div>
						<div className="footer__contact">
							<a href="mailto:hello@clause.com">
								<RiMailLine size={14} /> hello@clause.com
							</a>
							<a href="tel:+12198648321">
								<RiPhoneLine size={14} /> +1(219) 851 684 321
							</a>
						</div>
					</div>

					<div>
						<div className="footer__col-title">Solution</div>
						<ul className="footer__links">
							{[
								"Why Clause",
								"Features",
								"OpenAI",
								"Technology",
								"Security",
							].map((l) => (
								<li key={l}>
									<a href="#">{l}</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="footer__col-title">Customers</div>
						<ul className="footer__links">
							{["Procurement", "Sales", "Legal", "Medium", "Enterprise"].map(
								(l) => (
									<li key={l}>
										<a href="#">{l}</a>
									</li>
								),
							)}
						</ul>
					</div>

					<div>
						<div className="footer__col-title">Resources</div>
						<ul className="footer__links">
							{["Pricing", "Contact Sales", "Changelog", "Blog"].map((l) => (
								<li key={l}>
									<a href="#">{l}</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="footer__bottom">
					<span className="footer__copy">
						© Copyright 2024 Clause. All rights reserved.
					</span>
					<div className="footer__socials">
						<a href="#" aria-label="Twitter">
							<RiTwitterXLine size={18} />
						</a>
						<a href="#" aria-label="LinkedIn">
							<RiLinkedinBoxLine size={18} />
						</a>
						<a href="#" aria-label="Instagram">
							<RiInstagramLine size={18} />
						</a>
						<a href="#" aria-label="YouTube">
							<RiYoutubeLine size={18} />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
