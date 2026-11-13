import {
	RiArrowRightUpLine,
	RiBarChartBoxLine,
	RiCloseLine,
	RiCodeLine,
	RiDoubleQuotesL,
	RiGlobalLine,
	RiMailLine,
	RiMenuLine,
	RiPhoneLine,
	RiRocketLine,
	RiShieldCheckLine,
	RiSparkling2Line,
} from "@remixicon/react";
import { useState } from "react";
import "./index.css";

const services = [
	{
		icon: RiCodeLine,
		title: "Product engineering",
		description:
			"From first prototype to dependable production software, we build digital products that are ready for real users.",
	},
	{
		icon: RiBarChartBoxLine,
		title: "Growth systems",
		description:
			"Turn scattered data into clear decisions with analytics, automation, and workflows that scale with your team.",
	},
	{
		icon: RiSparkling2Line,
		title: "Experience design",
		description:
			"Make every interaction feel simple and intentional with thoughtful UX, visual systems, and accessible interfaces.",
	},
];

const process = [
	[
		"01",
		"Discover",
		"We align on the problem, audience, and the outcome that matters most.",
	],
	[
		"02",
		"Build",
		"We work in focused iterations, sharing progress early and often.",
	],
	["03", "Grow", "We measure what works and keep improving after launch."],
];

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	return (
		<div className="site-shell">
			<header className="navbar">
				<div className="container navbar__inner">
					<a
						className="brand"
						href="#home"
						onClick={closeMenu}
						aria-label="TeckBase home"
					>
						<span className="brand__mark">
							<RiCodeLine size={17} />
						</span>
						<span>TeckBase</span>
					</a>
					<button
						className="navbar__menu-button"
						type="button"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
					</button>
					<nav className={`navbar__nav${menuOpen ? " navbar__nav--open" : ""}`}>
						<a href="#services" onClick={closeMenu}>
							Services
						</a>
						<a href="#approach" onClick={closeMenu}>
							Approach
						</a>
						<a href="#about" onClick={closeMenu}>
							About
						</a>
						<a href="#contact" onClick={closeMenu}>
							Contact
						</a>
					</nav>
					<a
						className="button button--small navbar__cta"
						href="#contact"
						onClick={closeMenu}
					>
						Start a project <RiArrowRightUpLine size={16} />
					</a>
				</div>
			</header>

			<main>
				<section className="hero" id="home">
					<div className="container hero__grid">
						<div className="hero__content">
							<div className="eyebrow">
								<span className="eyebrow__dot" /> Digital products, thoughtfully
								built
							</div>
							<h1>
								Build what&apos;s <em>next.</em>
							</h1>
							<p className="hero__lead">
								TeckBase partners with ambitious teams to turn bold ideas into
								clear, useful, and lasting digital experiences.
							</p>
							<div className="hero__actions">
								<a className="button" href="#contact">
									Let&apos;s talk <RiArrowRightUpLine size={17} />
								</a>
								<a className="text-link" href="#services">
									Explore our work <RiArrowRightUpLine size={16} />
								</a>
							</div>
							<div className="hero__proof">
								<div className="proof__avatars" aria-hidden="true">
									<span>TB</span>
									<span>UI</span>
									<span>AI</span>
								</div>
								<p>
									<strong>Built for momentum.</strong>
									<br />A small, senior team with a big view.
								</p>
							</div>
						</div>
						<div
							className="hero__visual"
							aria-label="Abstract TeckBase technology illustration"
						>
							<div className="visual__orbit visual__orbit--one" />
							<div className="visual__orbit visual__orbit--two" />
							<div className="visual__core">
								<RiRocketLine size={42} />
							</div>
							<div className="visual__node visual__node--top">
								<RiCodeLine size={20} />
							</div>
							<div className="visual__node visual__node--right">
								<RiGlobalLine size={20} />
							</div>
							<div className="visual__node visual__node--bottom">
								<RiShieldCheckLine size={20} />
							</div>
							<div className="visual__label visual__label--top">
								IDEAS → IMPACT
							</div>
							<div className="visual__label visual__label--bottom">
								TECKBASE / 2026
							</div>
						</div>
					</div>
					<div className="hero__scroll">
						Scroll to explore <span>↓</span>
					</div>
				</section>

				<section className="intro" id="about">
					<div className="container intro__grid">
						<p className="section-kicker">Why TeckBase</p>
						<div>
							<h2>
								Technology should make the <span>complex feel simple.</span>
							</h2>
							<p className="intro__copy">
								We combine strategy, design, and engineering to help
								organizations move with confidence. No noise, no unnecessary
								layers—just thoughtful work that creates a measurable
								difference.
							</p>
							<a className="text-link" href="#approach">
								How we work <RiArrowRightUpLine size={16} />
							</a>
						</div>
					</div>
				</section>

				<section className="services section" id="services">
					<div className="container">
						<div className="section-heading">
							<div>
								<p className="section-kicker">What we do</p>
								<h2>
									From first thought
									<br />
									<span>to real-world value.</span>
								</h2>
							</div>
							<p className="section-heading__aside">
								A focused set of capabilities for teams that care about the
								details.
							</p>
						</div>
						<div className="services__grid">
							{services.map(({ icon: Icon, title, description }, index) => (
								<article className="service-card" key={title}>
									<div className="service-card__number">0{index + 1}</div>
									<div className="service-card__icon">
										<Icon size={22} />
									</div>
									<h3>{title}</h3>
									<p>{description}</p>
									<a href="#contact" aria-label={`Learn about ${title}`}>
										Learn more <RiArrowRightUpLine size={15} />
									</a>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="approach section" id="approach">
					<div className="container approach__grid">
						<div>
							<p className="section-kicker">Our approach</p>
							<h2>
								Good work is a <span>team sport.</span>
							</h2>
							<p className="approach__copy">
								We bring clarity to the process and keep the right people close
								at every step.
							</p>
							<a className="button button--light" href="#contact">
								Meet your team <RiArrowRightUpLine size={17} />
							</a>
						</div>
						<div className="process-list">
							{process.map(([number, title, description]) => (
								<div className="process-item" key={number}>
									<span className="process-item__number">{number}</span>
									<div>
										<h3>{title}</h3>
										<p>{description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="quote section">
					<div className="container quote__inner">
						<RiDoubleQuotesL size={44} />
						<blockquote>
							“The best technology disappears into the experience. That&apos;s
							the standard we build for.”
						</blockquote>
						<p>— The TeckBase team</p>
					</div>
				</section>

				<section className="contact section" id="contact">
					<div className="container contact__inner">
						<div>
							<p className="section-kicker">Have a challenge?</p>
							<h2>
								Let&apos;s make
								<br />
								<span>something useful.</span>
							</h2>
						</div>
						<div className="contact__details">
							<p>
								Tell us what you&apos;re working on and where you want to go
								next.
							</p>
							<a className="contact__email" href="mailto:hello@teckbase.com">
								hello@teckbase.com <RiArrowRightUpLine size={20} />
							</a>
							<div className="contact__meta">
								<a href="tel:+919932651077">
									<RiPhoneLine size={16} /> +91 99326 51077
								</a>
								<span>
									<RiGlobalLine size={16} /> Working worldwide
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="container footer__top">
					<a className="brand brand--footer" href="#home">
						<span className="brand__mark">
							<RiCodeLine size={17} />
						</span>
						<span>TeckBase</span>
					</a>
					<p>Digital products for teams moving forward.</p>
					<a className="footer__back" href="#home">
						Back to top ↑
					</a>
				</div>
				<div className="container footer__bottom">
					<span>
						© {new Date().getFullYear()} TeckBase. All rights reserved.
					</span>
					<div className="footer__links">
						<a href="mailto:hello@teckbase.com">
							<RiMailLine size={15} /> Email
						</a>
						<a
							href="https://www.linkedin.com/company/teckbase/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn <RiArrowRightUpLine size={14} />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
